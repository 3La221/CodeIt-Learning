import React from "react";
import { getUser } from "../../helpers/actions";
import hero from "../../assets/hero_section.svg";

const Hero = () => {
  const user_id = getUser();

  return (
    <section className="bg-white dark:bg-gray-900 py-24 h-dvh">
      <div className=" max-w-screen-xl flex justify-content py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Text Content */}
        <div className="lg:col-span-7 flex mr-3">
          <div className="mr-auto place-self-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#35374B] dark:text-white">
              CODE<span className="text-[#50727B]">iT</span>-Learning{" "}
            </h1>
            <h4 className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              votre partenaire en formation technologique{" "}
            </h4>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#35374B] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            {user_id && (
              <a
                href={`formations/${user_id}`}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Mes Formations
              </a>
            )}
          </div>
        </div>
        {/* Image */}
        <div className="hidden lg:block lg:col-span-5">
          <img
            src={hero}
            alt="Hero Image"
            className="h-80 max-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
