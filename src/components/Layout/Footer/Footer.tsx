import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 lg:px-6 h-14 flex items-center justify-between container mx-auto max-w-7xl">
      <div className="container mx-auto max-w-7xl flex flex-col gap-2 sm:flex-row py-6 w-full items-center">
        <h3 className="text-2xl">Teacher PA app</h3>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Contact Us
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link to="" target="_blank">
            <FaTwitter className="h-5 w-5" />
          </Link>
          <Link to="" target="_blank">
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link to="" target="_blank">
            <FaLinkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        RECIPIE app. All rights reserved by RECIPIE app Team.
      </p>
    </footer>
  );
};

export default Footer;
