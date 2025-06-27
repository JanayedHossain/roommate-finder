import { Typewriter } from "react-simple-typewriter";
import aboutusImg from '../../assets/aboutus.jpg'
import { Fade } from "react-awesome-reveal";
const AboutUs = () => {
  return (
    <Fade cascade duration={600}>
      <section className="max-w-7xl mx-auto px-4 py-10 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-center ">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-center w-[90%] text-xs sm:text-sm md:text-base sm:w-3/4 pt-3 mx-auto text-gray-500">
            <Typewriter
              words={["Making roommate finding simple."]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={aboutusImg}
            alt="Roommates"
            className="rounded-lg shadow-md"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Roommate Finder started with a simple idea — to help people find
              compatible roommates without the hassle. Whether you're a student,
              a young professional, or someone just relocating, our platform
              connects you to people who match your preferences and lifestyle.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We combine powerful search filters, real-time availability, and a
              user-friendly experience to make your roommate search efficient
              and stress-free.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            What We Offer
          </h3>
          <ul className="text-gray-700 space-y-2">
            <li>✔️ Verified Roommate Listings</li>
            <li>✔️ Personalized Matches based on Preferences</li>
            <li>✔️ Easy-to-use Dashboard and Post Management</li>
            <li>✔️ Mobile Friendly and Secure</li>
          </ul>
        </div>
      </section>
    </Fade>
  );
};

export default AboutUs;
