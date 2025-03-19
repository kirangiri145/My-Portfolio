import React from "react";
import photo from "/kiran.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container  mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed❤️</span>
            <div className="flex space-x-1 md:text-4xl">
              <h1>Hello,🕉️🦚I'am a </h1>
              {/* <span className="text-red-700 font-bold"> Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a passionate CSIT student and a web developer with a strong
              interest in building modern, scalable, and user-friendly web
              applications. I specialize in the MERN stack and continuously
              enhance my skills to stay updated with the latest web
              technologies. Learnig:👉React.js, Next.js, HTML, CSS, JavaScript,
              Tailwind CSS, Node.js, Express.js, MongoDB,GitHub,
              Vercel, Netlify..
            </p>
            <br />
            {/* Social media icons */}
            <div className="flex flex-col md:flex-row justify-between  items-center space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold ">Available On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/giri.kiran.2056"
                      target="_blank"
                    >
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/kiran__giri123/"
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kiran-giri-68349a328/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.snapchat.com/add/girikiran1517/"
                      target="_blank"
                    >
                      <FaSnapchat className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8">
            <img
              src={photo}
              alt=""
              className="rounded-full md:w-[450px] md:h-[450px] "
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
