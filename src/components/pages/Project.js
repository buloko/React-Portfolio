import React from 'react';
import CodeQuiz from "../../../src/assets/images/buloko.github.io_Code-Quiz_.png";
import PasswordGenerator from "../../../src/assets/images/buloko.github.io_Password-Generator_.png";
import WeatherDashboard from "../../../src/assets/images/buloko.github.io_Weather-Dashboard_.png";
import MarvelSearch from "../../../src/assets/images/evolangit.github.io_Marvel-Search-Engine_.png";
import JATE from "../../../src/assets/images/glacial-retreat-87961.herokuapp.com_.png";
import README from "../../../src/assets/images/Screen Shot 2023-03-31 at 2.40.12 PM.png";
import Swapshop from "../../../src/assets/images/swapshop.png"
export default function Projects() {
    
return (
    <div>
      <div id="project section" className="relative py-20 md:py-24 bg-gray-800">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* section header */}
          <header className="text-center mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
              <span className="font-light">My</span> Projects
            </h2>
            <hr className="block w-12 h-0.5 mx-auto my-5 bg-red-800 border-blue-700"></hr>
          </header>

          <div className="flex flex-wrap flex-row -mx-4 text-center">
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://buloko.github.io/Code-Quiz/">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={CodeQuiz}
                      alt="reciplease"
                    ></img>
                  </a>
                </div>
                <div className="flex flex-shrink py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://buloko.github.io/Code-Quiz/"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        CodeQuiz
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        This was my first challenge working with Javascript, it took me awhile but im happy with how it turned out!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://glacial-retreat-87961.herokuapp.com/">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={JATE}
                      alt="JATE"
                    ></img>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://glacial-retreat-87961.herokuapp.com/"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        JATE - Just Another Text Editor
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        Take notes that save to your local cache and download
                        the app to view your notes even while not connected to
                        the internet!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://github.com/buloko/Readme-Generator">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={README}
                      alt="terminal"
                    ></img>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://github.com/buloko/Readme-Generator"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        README Generator
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        An application to generate a quick README for any
                        project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://evolangit.github.io/Marvel-Search-Engine/">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={MarvelSearch}
                      alt="Marvel-Search"
                    ></img>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://evolangit.github.io/Marvel-Search-Engine/"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        Marvel-Search-Engine
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        my first group, we were all big marvel fans so it was cool to see how it turned out
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://buloko.github.io/Password-Generator/">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={PasswordGenerator}
                      alt="Password-generator"
                    ></img>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://buloko.github.io/Password-Generator/"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        Password-Generator
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        A website that generate a password just hope you remember what it was!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://buloko.github.io/Weather-Dashboard/">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={WeatherDashboard}
                      alt="Weather-Dashboard"
                    ></img>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://buloko.github.io/Weather-Dashboard/"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        WeatherDashboard
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        My very own weather app, put in any city and get the weather forecast for the next five days!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*item*/}
            <div class="flex px-4 max-w-full w-full sm:1/2 lg: w-1/3 lg: px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://swopshop.herokuapp.com/">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transtition duration-700 hover opacity-20">
                      <img
                      className="max-w-full h-auto"
                      src={Swapshop}
                      alt="Swapshop"
                      ></img>
                    </div>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font bold text-gray-800">
                      <a href="https://swopshop.herokuapp.com/"
                      className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        Swapshop
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        My final project! the one shop stop for all swappin needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}































