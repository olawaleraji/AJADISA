import React from "react";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-24">
        <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
              Software Engineer
            </p>

            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
              Ajao Toheeb Adisa
            </h1>

            <p className="text-gray-600 font-normal text-md mb-8">
              As a frontend developer proficient in React, JavaScript, and
              Next.js, I specialize in crafting dynamic and intuitive user
              interfaces. With a keen eye for detail and a passion for
              delivering exceptional frontend solutions, I excel in creating
              engaging web applications that exceed expectations. Let&apos;s
              collaborate to bring your vision to life!
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Download CV
              </Link>

              <Link
                href="#"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>

        <section className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
          <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
            <div className="px-6 md:px-8">
              <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                5+
              </span>
              <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                Web Projects
              </span>
            </div>

            <div className="px-6 md:px-8">
              <span className="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                25+
              </span>
              <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                Customers
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
              Social
            </span>
            <span className="h-px w-12 bg-gray-200"></span>

            <div className="flex gap-4">
              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#212121"
                    fill-rule="evenodd"
                    d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                  ></path>
                  <polygon
                    fill="#fff"
                    points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                  ></polygon>
                  <polygon
                    fill="#fff"
                    points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                  ></polygon>
                </svg>
              </Link>

              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </Link>

              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
