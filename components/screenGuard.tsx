// components/ScreenGuard.tsx
"use client";

import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  minWidth?: number; // pixels
}

export default function ScreenGuard({ children, minWidth = 600 }: Props) {
  const [isWide, setIsWide] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq: MediaQueryList = window.matchMedia(`(min-width: ${minWidth}px)`);

    // Properly typed handler
    const handler = (e: MediaQueryListEvent) => {
      setIsWide(e.matches);
    };

    // Initial state
    setIsWide(mq.matches);

    // Add listener with type-safe handling
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler);
    } else {
      // Old browsers
      mq.addListener(handler);
    }

    return () => {
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", handler);
      } else {
        mq.removeListener(handler);
      }
    };
  }, [minWidth]);

  if (isWide === null) return null;

  if (!isWide) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white p-6">
        <div className="max-w-md text-center">
          {/* <h2 className="text-2xl font-semibold mb-2 text-[#114285]">
            Screen too small
          </h2> */}
          <p className="mb-4 text-gray-800">
            This site is not available on screens smaller than {minWidth}px.
          </p>
          <p className="text-sm text-gray-600">
            Please open on a larger device.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
