import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/giri.kiran.2056"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/kiran__giri123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-600 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kiran-giri-68349a328/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-500 transition duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center text-center gap-2">
              <p className="text-sm">
                &copy; 2025. All rights reserved. Designed By: Kiran Giri...🕉️
              </p>
              <p className="text-sm">Supportive Partner❤️ Suresh Bhujel.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
