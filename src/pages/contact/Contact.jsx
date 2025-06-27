import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-4xl mx-auto px-3 pt-10 pb-20">
      <h1 className="text-3xl font-bold text-center text-primary">Contact</h1>
      <p className="text-center w-[90%] text-xs sm:text-sm md:text-base sm:w-3/4 pt-3 mx-auto text-gray-500">
        <Typewriter
          words={["Need help? Contact us."]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white px-3 py-8 sm:p-8 rounded-lg shadow-md"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-md p-2 sm:px-4 sm:py-3  focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md p-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="5"
            className="w-full border border-gray-300 rounded-md p-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full py-3 font-semibold rounded-md hover:bg-primary-dark transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
