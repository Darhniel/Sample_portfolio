"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";

interface ProjectImagesProps {
  id: string;
  image: string[];
}
const imageUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
};

const Images: ProjectImagesProps[] = [
  {
    id: "voya",
    image: [
      "/voya1.png",
      "/voya2.png",
      "/voya3.png",
      "/voya4.png",
      "/voya5.png",
    ],
  },
  {
    id: "orthorus",
    image: [
      "/orthorus1.jpg",
      "/orthorus2.jpg",
      "/orthorus3.jpg",
      "/orthorus4.jpg",
      "/orthorus5.jpg",
      "/orthorus6.jpg",
      "/orthorus7.jpg",
      "/orthorus8.jpg",
    ],
  },
  {
    id: "vynt",
    image: ["/vynt1.png", "/vynt2.png", "/vynt3.png", "/vynt4.png"],
  },
  {
    id: "creatorwire",
    image: ["/creatorwire1.jpg"],
  },
  {
    id: "reeka",
    image: [
      "/reeka1.jpg",
      "/reeka2.jpg",
      "/reeka3.jpg",
      "/reeka4.jpg",
      "/reeka5.jpg",
      "/reeka6.jpg",
      "/reeka7.jpg",
      "/reeka7.jpg",
    ],
  },
  {
    id: "reekadeck",
    image: [
      "/reekadeck1.jpg",
      "/reekadeck2.jpg",
      "/reekadeck3.jpg",
      "/reekadeck4.jpg",
      "/reekadeck5.jpg",
    ],
  },
  {
    id: "ajoin",
    image: [
      "/ajoin1.png",
      "/ajoin2.png",
      "/ajoin3.png",
      "/ajoin4.png",
      "/ajoin5.png",
    ],
  },
];

const projectTexts: {
  [key: string]: {
    sections: { title: string; text: string }[];
    extra?: {
      indexAfter: number;
      title: string;
      text: (string | string[])[];
    }[];
  };
} = {
  voya: {
    sections: [
      {
        title: "VOYA",
        text: "This all-in-one mobility and lifestyle app helps users navigate visa applications, book private daily rides, access personalized client services, and enjoy luxury boat cruises, delivering seamless convenience for business and leisure needs.",
      },
      {
        title: "The Challenge",
        text: "As the lead product designer at VOYA my challenge was to design an intuitive, engaging and easy to understand app that allowed users to easily book any of the premium services we offered without confusion while creating a great experience while they book our services",
      },
    ],
    extra: [
      {
        indexAfter: 2,
        title: "",
        text: ["One of the feature we have was to give in ride service feedback to help improve the quality of service rendered and also to get real time feedback ."],
      },
      {
        indexAfter: 3,
        title: "",
        text: [
          "Gamification of the rewards system is to motivate users to use the platform and book our services. ",
          "My Tasks while working on VOYA:",
          [
            "Create and maintain design system",
            "Design website to promote the app features and benefits. ",
            "Improve presentations for investors.",
            "Design social media posts.",
            "Do research and frequently test prototypes with users.",
            "Design dashboards for management of the various services we offer.",
          ],
        ],
      },
      {
        indexAfter: 4,
        title: "",
        text: ["One of the feature we have was to give in ride service feedback to help improve the quality of service rendered and also to get real time feedback ."],
      },
    ],
  },
  vynt: {
    sections: [
      {
        title: "VYNT",
        text: "An intuitive app designed for fashion enthusiasts to discover, buy, and sell pre-loved clothing and accessories, promoting sustainable style through the art of thrifting.",
      },
      {
        title: "The Challenge",
        text: "As the lead product designer at VYNT my challenge was to design that would easily facilitate buying and selling with ease while also allowing for engagement between users on the platform.",
      },
    ],
    extra: [
      {
        indexAfter: 1,
        title: "",
        text: ["Allowing sellers to be able to individually accept item in a multiple item order was vital. This was needed to make sure that sellers can easily sell what what they have available and making selling on the platform alot easier."],
      },
      {
        indexAfter: 2,
        title: "",
        text: ["The app is loved by users and this is evident in the results"],
      },
      {
        indexAfter: 2,
        title: "4000+",
        text: ["Over 4000 users and still growing."],
      },
      {
        indexAfter: 2,
        title: "80%",
        text: ["80% completion rate for user onboarding."],
      },
      {
        indexAfter: 2,
        title: "2000+",
        text: ["Over 2000 plus transactions have taken place on the platform"],
      },
      {
        indexAfter: 2,
        title: "5",
        text: ["App Store rating and Google Store rating"],
      },
    ],
  },
  orthorus: {
    sections: [
      {
        title: "ORTHRUS THE PROJECT",
        text: "A streamlined web platform for startups and investment managers to efficiently raise capital and manage investor operations, from fundraising campaigns to reporting and compliance.",
      }
    ],
  },
  ajoin: {
    sections: [
      {
        title: "AJOIN",
        text: "A user-friendly app designed to help sports enthusiasts easily discover nearby sporting equipment rentals and book local arenas, making it simple to gear up and get active wherever they are.",
      },
    ],
    extra: [
      {
        indexAfter: 2,
        title: "The Challenge",
        text: ["One of the features we had was to give in-ride service feedback to help improve the quality of service rendered and also to get real-time feedback."],
      },
      {
        indexAfter: 2,
        title: "The Solution",
        text: ["I solved this issue by merging the community and the sport facilities into one feature, do this one the user get to interact each other and easily access the sporting equipment at the facilities and also use the facility itself."],
      },
    ],
  },
  reeka: {
    sections: [
      {
        title: "REEKA",
        text: "A comprehensive web-based platform that simplifies property management, helping landlords and housing providers track tenants, manage leases, handle payments, and streamline communication, all in one place.",
      },
      {
        title: "100+",
        text: "Over 100 plus hotel and real estates companies currently use this application ton manage their properties",
      },
      {
        title: "80%",
        text: "80% of our users have recording an increase in their finances as a results of accurate record keeping and proper tracking",
      },
    ],
  },
}

const Projectimages = () => {
  const params = useParams();
  const id = params?.id as string | undefined;

  const selectedImage = Images.find((selected) => selected.id === id);

  if (!selectedImage) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }

  return (
    <div>
      <Projectpic {...selectedImage} />
    </div>
  );
};

const Projectpic = (props: ProjectImagesProps) => {
  const { image, id } = props;
  const sectionContent = projectTexts[id];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col gap-5 md:gap-8 px-5 sm:px-10 m-auto mt-12 mb-10 sm:mb-20 w-full">
        {image.map((img, index) => (
          <div key={index}>
            <motion.div
              {...imageUp}
              className={`${id === "vynt" && "bg-[#BDBDBD]"} ${
                id === "creatorwire" && "max-h-[2647px]"
              } flex justify-center max-h-[843px] p-4 sm:p-8 md:min-w-[90%] border border-[#00000033] rounded-xl`}
            >
              <Image
                width={1261.48}
                height={717}
                src={img}
                alt={`${id} Project Image`}
                style={{ objectFit: "inherit" }}
                className={`rounded-lg ${id === "creatorwire" && "w-[732px]"} ${
                  id === "orthorus" && "w-[1057px]"
                } ${img === "/voya5.png" && "w-[796px]"}`}
              />
            </motion.div>

            {/* Show main title/text block after image 0 */}
            {index === 0 && sectionContent && (
              <motion.div
                {...imageUp}
                className="mt-[120px] mb-[100px] mx-auto max-w-3xl flex flex-col justify-center items-center gap-[64px]"
              >
                {sectionContent.sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col gap-[24px]">
                    <h2 className="text-[36px] font-medium text-[#363636] tracking-[-0.04em]">
                      {section.title}
                    </h2>
                    <p className="text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em]">
                      {section.text}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Show extra content based on indexAfter */}
            {sectionContent?.extra &&
              sectionContent.extra.some((e) => e.indexAfter === index) && (
                <motion.div
                  {...imageUp}
                  className="mt-[120px] mb-[100px] mx-auto max-w-6xl flex flex-col justify-center items-center gap-[64px]"
                >
                  {/* Special handling for VYNT project */}
                  {id === "vynt" && index === 1 && (
                    // First extra item stands alone on its own row
                    <div className="flex flex-col gap-[24px] w-full items-center">
                      {(() => {
                        const firstExtra = sectionContent.extra.find((e) => e.indexAfter === index);
                        return (
                          <div className="flex flex-col gap-[24px] items-center">
                            {firstExtra?.title && (
                              <h2 className="text-[36px] font-medium text-[#363636] tracking-[-0.04em]">
                                {firstExtra?.title}
                              </h2>
                            )}
                            {firstExtra?.text.map((block, j) =>
                              typeof block === "string" ? (
                                <p
                                  key={j}
                                  className="text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] text-center"
                                >
                                  {block}
                                </p>
                              ) : (
                                <ul
                                  key={j}
                                  className="list-disc text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] ml-5 space-y-2"
                                >
                                  {block.map((item, k) => (
                                    <li key={k}>{item}</li>
                                  ))}
                                </ul>
                              )
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {id === "vynt" && index === 2 && (
                    <>
                      {/* First item (results text) stands alone */}
                      <div className="flex flex-col gap-[24px] w-full items-center">
                        {(() => {
                          const itemsAtIndex = sectionContent.extra.filter((e) => e.indexAfter === index);
                          const firstItem = itemsAtIndex[0];
                          return (
                            <div className="flex flex-col gap-[24px] items-center">
                              {firstItem.title && (
                                <h2 className="text-[36px] font-medium text-[#363636] tracking-[-0.04em]">
                                  {firstItem.title}
                                </h2>
                              )}
                              {firstItem.text.map((block, j) =>
                                typeof block === "string" ? (
                                  <p
                                    key={j}
                                    className="text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] text-center"
                                  >
                                    {block}
                                  </p>
                                ) : (
                                  <ul
                                    key={j}
                                    className="list-disc text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] ml-5 space-y-2"
                                  >
                                    {block.map((item, k) => (
                                      <li key={k}>{item}</li>
                                    ))}
                                  </ul>
                                )
                              )}
                            </div>
                          );
                        })()}
                      </div>

                      {/* Stats items in a grid row */}
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[40px] w-full justify-center">
                        {sectionContent.extra
                          .filter((e) => e.indexAfter === index)
                          .slice(1) // Skip the first item (results text)
                          .map((extraSection, i) => (
                            <div key={`stats-${i}`} className="flex flex-col gap-[24px] text-center">
                              {extraSection.title && (
                                <div className="flex items-center justify-center gap-2">
                                  <h2 className="text-[36px] font-medium text-[#363636] tracking-[-0.04em]">
                                    {extraSection.title}
                                  </h2>
                                  {/* Show stars immediately after "5" */}
                                  {extraSection.title === "5" && (
                                    <div className="flex gap-1">
                                      {[...Array(5)].map((_, starIndex) => (
                                        <Star 
                                          key={starIndex} 
                                          className="w-6 h-6 fill-yellow-400 text-yellow-400" 
                                        />
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                              {extraSection.text.map((block, j) =>
                                typeof block === "string" ? (
                                  <p
                                    key={j}
                                    className="text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em]"
                                    dangerouslySetInnerHTML={{
                                      __html: block.replace(
                                        /(App Store|Google Store)/gi,
                                        "<strong><u>$1</u></strong>"
                                      ),
                                    }}
                                  />
                                ) : (
                                  <ul
                                    key={j}
                                    className="list-disc text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] ml-5 space-y-2"
                                  >
                                    {block.map((item, k) => (
                                      <li key={k}>{item}</li>
                                    ))}
                                  </ul>
                                )
                              )}
                            </div>
                          ))}
                      </div>
                    </>
                  )}

                  {/* Default rendering for non-VYNT projects or different indexes */}
                  {(id !== "vynt" || (index !== 1 && index !== 2)) &&
                    sectionContent.extra
                      .filter((e) => e.indexAfter === index)
                      .map((extraSection, i) => (
                        <div key={`extra-${i}`} className="flex flex-col gap-[24px]">
                          {extraSection.title && (
                            <h2 className="text-[36px] font-medium text-[#363636] tracking-[-0.04em]">
                              {extraSection.title}
                            </h2>
                          )}
                          {extraSection.text.map((block, j) =>
                            typeof block === "string" ? (
                              <p
                                key={j}
                                className="text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em]"
                              >
                                {block}
                              </p>
                            ) : (
                              <ul
                                key={j}
                                className="list-disc text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] ml-5 space-y-2"
                              >
                                {block.map((item, k) => (
                                  <li key={k}>{item}</li>
                                ))}
                              </ul>
                            )
                          )}
                        </div>
                      ))}
                </motion.div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectimages;