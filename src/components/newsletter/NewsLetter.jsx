import { useState } from "react";
import { toast } from "react-toastify";
import newsfirstImg from "../../assets/newsfirstImg.jpg";
import { Fade } from "react-awesome-reveal";
const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <Fade cascade duration={600} triggerOnce={false}>
      <div className="relative bg-primary/80 mt-20 text-white py-20 px-4 sm:px-6 lg:px-20 rounded-xl flex items-center justify-center w-[95%] mx-auto overflow-hidden">
        <img
          src={newsfirstImg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.3)]"></div>
        <div className="z-50">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Subscribe to Our Newsletter
          </h2>

          <p className="mb-8 text-center max-w-xl mx-auto">
            Get updates about new roommate listings, offers, and tips right to
            your inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow border-gray-300 px-4 py-3 focus:outline-none border-b placeholder:text-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn h-full hover:btn-outline hover:text-white btn-primary font-semibold rounded-md px-6 py-3 hover:bg-transparent transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default Newsletter;
