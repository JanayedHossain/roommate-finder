import faqImage from "../../assets/faq.png";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const faqs = [
  {
    question: "Can I use the platform without creating an account?",
    answer:
      "Yes, you can browse listings and featured posts. However, to add listings or view detailed information, you’ll need to sign up or log in.",
  },
  {
    question: "Can I contact a roommate before liking their post?",
    answer:
      "No, you need to like a listing first to reveal the contact details and connect with the roommate.",
  },
  {
    question: "Is my personal information visible to everyone?",
    answer:
      "No, only your name and profile photo are visible. Contact details are only revealed after you interact with a listing (e.g., click Like).",
  },
  {
    question: "Can I delete my roommate listing later?",
    answer:
      "Yes. Go to 'My Listings', where you can delete or update any post you've added. A confirmation will be shown before deletion.",
  },
  {
    question: "What happens after I like a roommate post?",
    answer:
      "Once you like a post, the interest count increases and the contact details of the user become visible. It helps you connect faster.",
  },
];

const FAQ = () => {
  return (
    <section className=" py-20 w-[95%] mx-auto">
      <h2 className="text-3xl font-bold text-center font-primaryFont">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>
      <p className="text-center w-[90%] text-xs sm:text-sm md:text-base sm:w-3/4 pt-3 mx-auto text-gray-500">
        <Typewriter
          words={["Find quick answers to common questions."]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 order-2 lg:order-1">
          <Fade cascade damping={0.2} triggerOnce={false}>
            {faqs?.map((faq, index) => (
              <div key={index}>
                <div className="collapse collapse-arrow border border-base-300 ">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    defaultChecked={index == 0}
                  />
                  <div className="collapse-title text-primary font-semibold">
                    {faq.question}
                  </div>
                  <div className="collapse-content text-sm">{faq.answer}</div>
                </div>
              </div>
            ))}
          </Fade>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <Fade cascade damping={0.2} triggerOnce={false}>
            <img
              src={faqImage}
              alt="FAQ illustration"
              className="w-2/3 md:w-1/2 lg:w-2/3 xl:w-full mx-auto"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
