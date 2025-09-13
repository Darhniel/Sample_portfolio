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
    image: ["/vynt4.png","/vynt3.png","/vynt2.png","/vynt1.png"],
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
      "/reeka6.jpg",
      "/reeka7.jpg",
      "/reeka8.jpg",
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
        text: ["I introduced in-ride feedback tools that empowered users to share service impressions in real time. This enabled faster operational response, improved service quality, and created a direct feedback loop between rider experience and service refinement."],
      },
      {
        indexAfter: 3,
        title: "",
        text: [
          "My Tasks while working on VOYA:",
          [
            " Created and maintained the design system",
            "Designed website to promote the app features and benefits. ",
            "Created Pitch Deck Designs for presentation to investors."
          ],
          [
            " Designed social media posts.",
            "Did research and frequently tested prototypes with users.",
            " Designed dashboards for management of the various services we offer."
          ]
        ],
      },
    ],

  },
  vynt: {
    sections: [
      {
        title: "VYNT",
        text: "When fashion lovers want to refresh their wardrobe without compromising their values or the planet, they need a simple way to discover, buy, and sell pre-loved clothing, so they can express their style, save money, and reduce fashion waste. \n\nThis app is designed to make that job effortless: an intuitive, community-driven platform that makes thrifting not just easy, but exciting, enabling users to participate in a circular fashion economy that promotes sustainability and minimizes environmental impact.",
      },
      {
        title: "The Challenge",
        text: "When individuals want to buy or sell items online, they need a seamless way to complete transactions while also connecting with a trusted community, so they can engage confidently, make informed decisions, and build relationships within the platform.\n\nAs Lead Product Designer at VYNT, my vision was to design for this job: building an experience that not only simplified buying and selling but also fostered authentic, frictionless engagement between users, ensuring both utility and community were at the heart of the product.",
      },
    ],
    extra: [
      {
        indexAfter: 1,
        title: "",
        text: [
          "When sellers receive multi-item orders, they need a way to accept only the items they have available—so they can fulfill orders accurately, avoid cancellations, and keep the selling process smooth and flexible.",
          "Enabling item-level acceptance was essential. It gave sellers more control, reduced friction in managing inventory, and ultimately made selling on the platform easier and more reliable.",
        ],
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
        title: "ORTHRUS",
        text: "When crypto fund managers need to raise capital and manage ongoing investor relationships, they want a single, trustworthy platform that handles every LP interaction—from first outreach to ongoing reporting—so they can stay organized, build allocator trust, and scale fundraising efficiently.\n\n\nOrthrus delivers on this job by bringing all allocator (LP) touchpoints into one verified workspace—streamlining capital raising, investor updates, and compliance workflows in the crypto fund ecosystem.",
      },
      {
        title: "The Challenge",
        text: "When users are managing intricately linked workflows and data, they need a system that makes those relationships easy to understand and act on—so they can stay focused, avoid confusion, and move confidently through even the most complex processes.\n\nMy solution is designed to support this processes by turning tangled, multi-step operations into a streamlined, intuitive experience—where each action flows naturally into the next, and the bigger picture stays clear at every step.",
      },
    ],
  },
  ajoin: {
    sections: [
      {
        title: "AJOIN",
        text: "When sports enthusiasts want to stay active and social, they need an easy way to find nearby gear and book local arenas—so they can jump into games, stay fit, and connect with others without hassle. \n\n\nThis app is a user-friendly platform that removes barriers to playing by helping users quickly rent equipment and reserve spaces. By simplifying access to sports, we’re not just making it easier to get active. We’re making communities fun again."
      },
      {
        title: "The Challenge",
        text: "My vision for this project was  to seamlessly integrate the community aspect with access to sports facilities and equipment. Users didn’t just want to book a court or rent gear, they wanted to meet up, join games, and feel part of something local and social.",
      },
    ],
    //   extra: [
    //     {
    //       indexAfter: 2,
    //       title: "The Solution",
    //       text: [
    //         "I solved this issue by merging the community and the sport facilities into one feature, so the user gets to interact with each other, easily access the sporting equipment at the facilities, and also use the facility itself."
    //       ],
    //     },
    //   ],
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

interface Imagetexttypes {
  imagetext1?: string;
  imagetext2?: string;
  imagetext3?: string;
  imagetext4?: string;
  imagetext5?: string;
  imagetext6?: string;
}

const Imagetext: { [key: string]: Imagetexttypes[] } = {
  voya: [
    {
      imagetext1: "VOYA's Motion induced Splash Screen",
      imagetext2: "",
      imagetext3: "Home Screen",
      imagetext4: "",
      imagetext5: "Visa Booking Screen ",
      imagetext6: "",
    },
    {
      imagetext1: "Service Detail's Screen",
      imagetext2: "This screen offers a comprehensive view of the a private daily service entails.",
      imagetext3: "Booking Price Screen",
      imagetext4: "This screen shows the detail of a private daily driver book that has just been made with the necessary information needed.",
      imagetext5: "Booking Confirmation Screen",
      imagetext6: "This screen shows the detail of a private daily driver book that has just been made with the necessary information needed.",
    },
    {
      imagetext1: "Trip Detail Screen",
      imagetext2: "This screen offers a comprehensive view of the a private daily service entails",
      imagetext3: "Ongoing Booking Modal",
      imagetext4: "",
      imagetext5: "Trip Review",
      imagetext6: "This screen allows a user give feedback about the service they just used",
    },
    {
      imagetext1: "Reward Modal",
      imagetext2: "This introduces the reward feature to the user",
      imagetext3: "Rewards Screen",
      imagetext4: "This Screen show the gamification of the application to provide extra incentives for the users to use the application while also improve the overall user experience",
      imagetext5: "Trip Review",
      imagetext6: "A screen showing the various rewards to be won by users",
    },
    {
      imagetext1: "Private Daily Driver Screen",
      imagetext2: "This is an active private daily driver booking screen",
      imagetext3: "Visa Application",
      imagetext4: "This is a screen giving a user feedback in regard to a visa application",
      imagetext5: "Service Screen",
      imagetext6: "This screen shows the list of service we offfer on the plaform",
    },

  ],
  vynt: [
    {
      imagetext1: "Splash Screen",
      imagetext2: "",
      imagetext3: "Onboarding Screen",
      imagetext4: "",
      imagetext5: "Home Screen",
      imagetext6: "",
    },
    {
      imagetext1: "Store Front Screen",
      imagetext2: "This is a vital screen for sellers, it allows sellers on the platform maange their orders ",
      imagetext3: "Order Details Screen",
      imagetext4: "This is a vital screen for sellers, it allows sellers on the platform maange their orders ",
      imagetext5: "Order Processing Screen",
      imagetext6: "This screen offers a comprehensive view of a seller's order which allows the seller to individually accept or reject an order",
    },
    {
      imagetext1: "Post Screen",
      imagetext2: "This screen shows a user the details needed before making any purchase on the platform",
      imagetext3: "Check Out Screen",
      imagetext4: "This screen allows a buyer make well informed decision about the delivery and also see the total fee they would be paying",
      imagetext5: "Cart",
      imagetext6: "This screens allows you manages what you want to purchase, you can remove items",
    },
    {
      imagetext1: "Profile Screen",
      imagetext2: "This screen shows your listings as user and also allows your edit ans share your profile to other users",
      imagetext3: "Profile Screen",
      imagetext4: "A profile screen with zero listings",
      imagetext5: "Referral Code Screen",
      imagetext6: "This screen displays the referral code of user and the benefit they can get from sharing their code",
    },
  ],
  ajoin: [
    {
      imagetext1: "Splash Screen",
      imagetext2: "",
      imagetext3: "Onboarding Screen",
      imagetext4: "",
      imagetext5: "Guest Home Screen",
      imagetext6: "This is view a user sees when the decide to explore instead of seeing in or creating an account",
    },
    {
      imagetext1: "Home Screen",
      imagetext2: "A users view when they click on a location with multiple facilities",
      imagetext3: "Facility Screen",
      imagetext4: "A users view when they click on a sporting facility for the first time",
      imagetext5: "User's Profile",
      imagetext6: "This is view a user's sees when viewing another user's profile",
    },
    {
      imagetext1: "Home Screen",
      imagetext2: "This screen displays the different kind of sporting facilities availble on the platform .",
      imagetext3: "Hamburger Menu",
      imagetext4: "This allows for easy navigation from the home screen to anywhere else on the platform.",
      imagetext5: "Home Screen (Rental Ongoing)",
      imagetext6: "This screen shows that a users has rented a sporting equipment and also shows the time spent with the equipment.",
    },
    {
      imagetext1: "Home Screen",
      imagetext2: "This screen displays the different kind of sporting facilities and equipment available on the platform. ",
      imagetext3: "Equipment Reservation Screen",
      imagetext4: "This screen displays the different kind of equipment  available in a location and also available for rental.",
      imagetext5: "Equipment Reservation Screen",
      imagetext6: "This screen displays the different kind of equipment  available in a location and also available for rental.",
    },
    {
      imagetext1: "Accounts Screen",
      imagetext2: "This screen Shows activity that could be carried out on this account.",
      imagetext3: "Profile Screen",
      imagetext4: "This is a user's profile screen with all their information and activity on the appliaction.",
      imagetext5: "Profile Screen",
      imagetext6: "This screen shows the user's history on the platform.",
    },
  ],
  reeka: [
    {
      imagetext1: "Dashboard Screen",
      imagetext2: "This gives the property manager a general overview of what is going on with their properties ",
    },
    {
      imagetext1: "Listing Screen",
      imagetext2: "This screen display the total properties listed by the manger",

    },
    {
      imagetext1: "Property Detail screen",
      imagetext2: "This screen displays detailed information about a specific property",
    },
    {
      imagetext1: "Propery Addition Screen",
      imagetext2: "This showcases the information required from a property manager to add a property",
    },
    {
      imagetext1: "Propery Addition Screen",
      imagetext2: "This shows the bookings and event that takes place in their different properties. This views shows the monthly bookings and tasks ",
    },
    {
      imagetext1: "Calendar Screen",
      imagetext2: "This shows the bookings and event that takes place in their different properties. This views shows the weekly bookings and tasks ",
    },
  ],
  orthorus: [
    {
      imagetext1: "Account Creation Screen",
    },
    {
      imagetext1: "Onboarding Screen",

    },
    {
      imagetext1: "Dashboard Screen",
      imagetext2: "This screen gives a general overview of the details the funds manager's information and activities",
    },
    {
      imagetext1: "Dashboard Screen",
      imagetext2: "The screen shows the fund profile and the details contained in the profile. The fund profile would be visible to Allocators",
    },
    {
      imagetext1: "Fund Profile",
      imagetext2: "The screen shows the fund profile and the details contained in the profile. The fund profile would be visible to Allocators",
    },
    {
      imagetext1: "Fund Profile",
      imagetext2: "The screen shows the fund profile and the details contained in the profile. The fund profile would be visible to Allocators ",
    },
    {
      imagetext1: "Data Room",
      imagetext2: "This screen shows the fund manager what document are required for upload . This document would also be visible to allocators",
    },
    {
      imagetext1: "Settings Screen",
      imagetext2: "This provides users with ability to edit how access to their account is given and also shows devices that have been used to sign in",
    }
  ],
};


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
      <div className="flex flex-col gap-5 md:gap-8 px-5 sm:px-[80px] m-auto mt-12 mb-10 sm:mb-20 w-full">
        {image.map((img, index) => {
          const texts = Imagetext[id]?.[index]; //
          return (
            <div key={index}>
              <motion.div
                {...imageUp}
                className={`${id === "vynt" && "bg-[#BDBDBD]"} ${id === "creatorwire" && "max-h-[2647px]"
                  }  p-4 sm:p-8 md:min-w-[90%] rounded-xl bg-[#F5F5F580]`}
              >
                <div className="flex flex-col justify-center max-h-[900px]">
                  <div className="flex flex-row justify-center items-center">
                    <Image
                      width={1261.48}
                      height={717}
                      src={img}
                      alt={`${id} Project Image`}
                      style={{ objectFit: "inherit" }}
                      className={`rounded-lg ${id === "creatorwire" && "w-[732px]"} ${id === "orthorus" && "w-[1057px]"
                        } ${id === "reeka" && "rounded-[16px] border-[0.5px] border-[#00000033]"}`}
                    />
                  </div>
                  {texts && (() => {
                    const blocks = [
                      { title: texts.imagetext1, desc: texts.imagetext2 },
                      { title: texts.imagetext3, desc: texts.imagetext4 },
                      { title: texts.imagetext5, desc: texts.imagetext6 },
                    ];

                    // Filter out completely empty blocks
                    const filledBlocks = blocks.filter(
                      b => b.title?.trim() || b.desc?.trim()
                    );

                    return (
                      <div
                        className={`grid text-center mt-6 font-medium text-[#363636] text-[12px] gap-20 ${filledBlocks.length === 1
                          ? "grid-cols-1 sm:w-[40%] mx-auto"
                          : filledBlocks.length === 2
                            ? "grid-cols-2 justify-center"
                            : "grid-cols-3"
                          }`}
                      >
                        {filledBlocks.map((b, i) => (
                          <div key={i} className="flex flex-col w-4/5 mx-auto">
                            <p>{b.title}</p>
                            <p className="text-[#BBBBBB]">{b.desc}</p>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>



              </motion.div>

              {/* Show main title/text block after image 0 */}
              {index === 0 && sectionContent && (
                <motion.div
                  {...imageUp}
                  className="mt-[120px] mb-[100px] mx-auto max-w-6xl flex flex-row justify-center items-start gap-[64px]"
                >
                  {sectionContent.sections.map((section, idx) => (
                    <div key={idx} className="flex flex-col gap-[24px] flex-1">
                      {section.title && (
                        <h2 className="text-[36px] font-medium text-[#363636] tracking-[-0.04em]">
                          {section.title}
                        </h2>
                      )}
                      <div className="flex flex-col gap-[20px]">
                        {section.text.split("\n\n").map((para, i) => (
                          <p
                            key={i}
                            className="text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em]"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}


              {/* Show extra content based on indexAfter */}
              {sectionContent?.extra &&
                sectionContent.extra.some((e) => e.indexAfter === index) && (
                  <motion.div
                    {...imageUp}
                    className={`mt-[120px] mb-[100px] flex flex-col justify-center items-center gap-[64px] ${id === "voya" && index === 3 ? "ml-5 max-w-6xl" : "max-w-5xl mx-auto"
                      }`}
                  >
                    {/* Special handling for VOYA project index 3 */}
                    {id === "voya" && index === 3 && (
                      <>
                        {/* First item (My Tasks text) stands alone */}
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
                                {/* Show first text item */}
                                <p
                                  className={`${id === "voya" && index === 3 ? "text-[#363636]" : "text-[#BBBBBB]"
                                    } font-medium text-[20px] tracking-[-0.0024em]`}
                                >
                                  {firstItem.text[0] as string}
                                </p>
                              </div>
                            );
                          })()}
                        </div>

                        {/* Two array lists side by side */}
                        <div className="grid sm:grid-cols-2 gap-[10px] w-full justify-center max-w-6xl">
                          {(() => {
                            const itemsAtIndex = sectionContent.extra.filter((e) => e.indexAfter === index);
                            const firstItem = itemsAtIndex[0];
                            const arrayItems = firstItem.text.slice(1).filter(item => Array.isArray(item)) as string[][];

                            return arrayItems.map((arrayItem, i) => (
                              <div key={`array-${i}`} className="flex flex-col gap-[24px]">
                                <ul className="list-disc text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] ml-5 space-y-2 text-left">
                                  {arrayItem.map((item, k) => (
                                    <li key={k}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ));
                          })()}
                        </div>
                      </>
                    )}

                    {/* Special handling for VYNT project */}
                    {id === "vynt" && index === 1 && (
                      <div className="w-full flex flex-col items-center">
                        {(() => {
                          const firstExtra = sectionContent.extra.find((e) => e.indexAfter === index);
                          return (
                            <div className="flex flex-col gap-[24px] items-center w-full">
                              {firstExtra?.title && (
                                <h2 className="text-[36px] font-medium text-[#363636] tracking-[-0.04em]">
                                  {firstExtra?.title}
                                </h2>
                              )}
                              {/* flex row for the two paragraphs */}
                              <div className="flex flex-col md:flex-row gap-[40px] justify-center w-full max-w-6xl">
                                {firstExtra?.text.map((block, j) =>
                                  typeof block === "string" ? (
                                    <p
                                      key={j}
                                      className="text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] flex-1"
                                    >
                                      {block}
                                    </p>
                                  ) : (
                                    <ul
                                      key={j}
                                      className="list-disc text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] ml-5 space-y-2 flex-1"
                                    >
                                      {block.map((item, k) => (
                                        <li key={k}>{item}</li>
                                      ))}
                                    </ul>
                                  )
                                )}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}


                    {id === "vynt" && index === 2 && (
                      <>
                        {/* First item (results text) stands alone */}
                        <div className="flex flex-col gap-[24px] w-full">
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
                                      className="text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] text-left w-full flex justify-start"
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

                        {/* Stats items in a grid row - keeping max-w-6xl and original styling */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[40px] w-full justify-center max-w-6xl">
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
                      (id !== "voya" || index !== 3) &&
                      sectionContent.extra
                        .filter((e) => e.indexAfter === index)
                        .map((extraSection, i) => (
                          <div key={`extra-${i}`} className="flex flex-col gap-[24px] items-center">
                            {extraSection.title && (
                              <h2 className="text-[36px] font-medium text-[#363636] tracking-[-0.04em]">
                                {extraSection.title}
                              </h2>
                            )}
                            {extraSection.text.map((block, j) =>
                              typeof block === "string" ? (
                                <p
                                  key={j}
                                  className={`text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em]`}
                                >
                                  {block}
                                </p>
                              ) : (
                                <ul
                                  key={j}
                                  className="list-disc text-[#BBBBBB] font-medium text-[20px] tracking-[-0.0024em] ml-5 space-y-2 text-left"
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
          )

        })}
      </div>
    </div>
  );
};

export default Projectimages; 