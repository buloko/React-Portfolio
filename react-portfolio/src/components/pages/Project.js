import React from 'react';
import CodeQuiz from "../../../src/assets/images/buloko.github.io_Code-Quiz_.png";
import PasswordGenerator from "../../../src/assets/images/buloko.github.io_Password-Generator_.png";
import WeatherDashboard from "../../../src/assets/images/buloko.github.io_Weather-Dashboard_.png";
import MarvelSearch from "../../../src/assets/images/evolangit.github.io_Marvel-Search-Engine_.png";
import JATE from "../../../src/assets/images/glacial-retreat-87961.herokuapp.com_.png";
import README from "../../../src/assets/images/Screen Shot 2023-03-31 at 2.40.12 PM.png";
export default function Projects() {
    
return (
    <div>
        <div id= "project section" className="relative py-20 md:py-24 bg-gray-800">
            <div className="container xl:max-w-6xl mx-auto px-4">
                <header className="text-center mx-auto mb-12">
                    <h2 className="text-2xl md:text-3xl leading-normal mb-2 font bold text-gray-800 dark: text-gray-100">
                    <span className="font-light">My</span> Projects
                    </h2>
                    <hr className="block w-12 h-0.5 mx-auto my-5 bg-red-800 border-blue-700"></hr>
                </header>

                <div className="flex flex-wrap flex-row -mx-4 text-center">
                    <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
                        <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                          <a href="https://github.com/buloko/Code-Quiz">
                            <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                            <img className="max-w-full h-auto"
                            src={CodeQuiz}
                            alt="CodeQuiz">
                            </img>
                            </a> 
                        </div>
                        <div>
                            <div className="flex flex-shrink py-6 px-8 flex-1">
                            <div className="mb-2">
                             <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                                <a href="https://github.com/buloko/Code-Quiz" 
                                className="hover:text-blue-700 dark:hover:text-gray-100"
                                >
                                CodeQuiz
                                </a>
                                </h3> 
                                <div className= "text-gray-600">
                                  <p className="text-gray-500">
                                    This was my first challenge working with Javascript, it took me awhile to get to work.</p>  
                                    </div>  
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





























































}

