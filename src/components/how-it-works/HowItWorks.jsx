import { Fade } from "react-awesome-reveal";
import {
  FaUserPlus,
  FaClipboardList,
  FaListAlt,
  FaRegHeart,
  FaPhoneAlt,
  FaEdit,
  FaFolderOpen,
  FaUserCog,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const steps = [
  {
    id: 1,
    title: "Sign Up / Login",
    description: "Register or log in using your email or Google account.",
    icon: <FaUserPlus size={40} />,
  },
  {
    id: 2,
    title: "Add Roommate Listing",
    description:
      "Post your roommate need with rent, location, and preferences.",
    icon: <FaClipboardList size={40} />,
  },
  {
    id: 3,
    title: "Browse All Listings",
    description: "Explore roommate posts shared by other users.",
    icon: <FaListAlt size={40} />,
  },
  {
    id: 4,
    title: "See Details & Like",
    description: "View full post details and like if you're interested.",
    icon: <FaRegHeart size={40} />,
  },
  {
    id: 5,
    title: "Reveal Contact Info",
    description: "Liking a post will show the contact number of the user.",
    icon: <FaPhoneAlt size={40} />,
  },
  {
    id: 6,
    title: "Update / Delete Post",
    description: "Easily modify or delete your own listings anytime.",
    icon: <FaEdit size={40} />,
  },
  {
    id: 7,
    title: "My Listings Page",
    description: "See all your added listings in one place, in table format.",
    icon: <FaFolderOpen size={40} />,
  },
  {
    id: 8,
    title: "Manage Profile",
    description: "Update your profile information and profile picture.",
    icon: <FaUserCog size={40} />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-4 md:px-16 ">
      <h2 className="text-3xl font-semibold text-center  font-primaryFont">
        How It <span className="text-primary"> Works</span>
      </h2>
      <p className="text-center w-[90%] text-xs sm:text-sm md:text-base sm:w-3/4 pt-3 mx-auto text-gray-500 pb-14">
        <Typewriter
          words={["Find, post, and manage roommate listings easily."]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        <Fade cascade damping={0.2} triggerOnce={false}>
          {steps?.map((step) => (
            <div
              key={step.id}
              className="p-6 shadow-lg rounded-xl border border-transparent   hover:border-primary transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-primary">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default HowItWorks;
