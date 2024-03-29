import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font  bg-[#00206080] mt-20">
        <div className="container px-5 py-7 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" scroll-m-20 border-b pb-2 border-black text-xl font-semibold tracking-wide transition-colors first:mt-0">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"/"}
                    className=" font-base leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className=" font-base leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className=" font-base leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70"
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 border-b pb-2 text-xl border-black font-semibold tracking-wide transition-colors first:mt-0">
                Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"#"}
                    className=" font-base leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className=" font-base leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className=" font-base leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70"
                  >
                    Advertisement
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 border-b pb-2 text-xl border-black font-semibold tracking-wide transition-colors first:mt-0">
                Legal
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href={"#"}
                    className=" font-base leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70"
                  >
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className=" font-base leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70"
                  >
                    Privacy policy{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className=" font-base leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70"
                  >
                    Cookie policy   
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="scroll-m-20 border-b border-black pb-2 text-xl font-semibold tracking-wide transition-colors first:mt-0">
                Subscribe
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="font-base text- leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70"
                  >
                    Get Notified
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-white-100 bg-opacity-50 rounded border border-black focus:bg-transparent focus:ring-2 focus:ring-black-200 focus:border-black-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              <button className="lg:mt-2 mt-4  xl:mt-0 flex-shrink-0 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black/70  rounded">
                  Get Notified
                </button>
              </div>
              <p className="font-base text-sm leading-7 [&:not(:first-child)]:mt-6 font-medium text-white hover:text-white/70">
                Please submit your email
                <br className="lg:block hidden" />
                and get Notified
              </p>
            </div>
          </div>
        </div>
        <div className="bg-mywhite">
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Link className='mt-[-1.2rem]' href="/">
                    <Image src="/logo.png" alt="Digital Workspaces" width={150} height={50} />
                </Link>
            </p>
            <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
              © 2020 —
              <Link
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-white ml-1"
                target="_blank"
              >
                @TECH
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <p className="text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </p>
              <p className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </p>
              <p className="ml-3 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </p>
              <p className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </p>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;