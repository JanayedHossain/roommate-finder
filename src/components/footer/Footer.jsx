import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 text-sm md:text-base">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>Email: support@roommatefinder.com</p>
          <p>Phone: +880 123456-7890</p>
          <p>Address: 123 Dhaka, Bangladesh</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
          <p className="mb-2">
            By using our platform, you agree to our terms of service and privacy
            policy. Users are responsible for all content they post.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-xl hover:text-blue-500" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl hover:text-pink-500" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter className="text-xl hover:text-sky-400" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="text-xl hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} RoommateFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
