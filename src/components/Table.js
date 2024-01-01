import React from "react";
import kflugina from "../img/kf-lugina.png";
import kf2korriku from "../img/2korriku.png";
import fkdinamo from "../img/dinamo.png";
import morava from "../img/morava.png";
import pcinja from "../img/pcinja.png";
import rahoveci from "../img/rahoveci.png";
import roj from "../img/roj.png";
 
function Cards() {

  return (
   <div  className="stats">

<div className="overflow-x-auto">
  
        <div className="min-w-screen min-h-screen flex items-center justify-center  font-sans ">
            <div className="w-full lg:w-5/6">
            <p className="mb-2 text-m font-semibold leading-none text-center mr-50  text-indigo-600 uppercase ">
        STATS
      </p>
      <h3 className="mt-2 text-4xl text-center text-zinc-50 mb-2 ">
        Some of my{" "}
        <span className="font-extrabold text-indigo-600">career stats!</span>
      </h3>
                <div  className="bg-white text-white shadow-md rounded my-6">
                  
                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr style={{background:"#1f2937"}} className="bg-gray-200 text-white uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Season</th>
                                <th className="py-3 px-6 text-left">Club</th>
                                <th className="py-3 px-6 text-left">League</th>
                                <th className="py-3 px-6 text-center">Games</th>
                                <th className="py-3 px-6 text-center">Goals</th>
                                <th className="py-3 px-6 text-center">Assist</th>
                                <th className="py-3 px-6 text-center">Minutes Played</th>
                            </tr>
                        </thead>
                        <tbody className="text-white text-sm font-light">
                       
                          
                            <tr style={{background:"#1f2937"}} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                     
                                        <span className="font-medium">2017/18</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                        <img loading="lazy"  src={kflugina} alt="KF-LUGINA" width="30px" />
                                        </div>
                                        <span className="font-medium">KF Lugina</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                       
                                        <span className="font-medium">Pcinska League</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                       <span>19</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                       <span>2</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className=" text-white py-1 px-3 text-xs">3</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        
                                    <span className=" text-white py-1 px-3 text-xs">1425'</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{background:"#1f2937"}} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                       
                                        <span className="font-medium">2018/19</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                          <img loading="lazy" className="ml-1" src={kf2korriku} alt="2-KORRIKU" width="20px"/>
                                        </div>
                                        <span className="font-medium">KF 2 Korriku</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        
                                        <span className="font-medium">Kosovo Super League U17</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                       <span>14</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                       <span>1</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                       <span>4</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                      <span>1130'</span>
                                    </div>
                                </td>
                            </tr>

                            <tr style={{background:"#1f2937"}} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        
                                        <span className="font-medium">2019/20</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                           <img loading="lazy" src={fkdinamo} alt="dinamo" width="30px"/>
                                        </div>
                                        <span className="font-medium">FK Dinamo Vranje</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        
                                        <span className="font-medium">Serbian First League U19</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                       <span>23</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        1
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        3
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        1926'
                                       </div>
                                </td>
                            </tr>

                            <tr style={{background:"#1f2937"}} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                    
                                        <span className="font-medium">2020/21</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                        <img loading="lazy" src={morava} alt="morava" width="30px"/>
                                        </div>
                                        <span className="font-medium">SFK Morava</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        
                                        <span className="font-medium">Serbian League East</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        31
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        1
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                       2
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                      2294'
                                       </div>
                                </td>
                            </tr>

                            <tr style={{background:"#1f2937"}} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                    
                                        <span className="font-medium">2021/22</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                        <img loading="lazy" src={pcinja} alt="pcinja" width="30px"/>
                                        </div>
                                        <span className="font-medium">FK Pcinja</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        
                                        <span className="font-medium">Serbian League East</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        8
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        0
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                       2
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                      520'
                                       </div>
                                </td>
                            </tr>
                            <tr style={{background:"#1f2937"}} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                    
                                        <span className="font-medium">2021/22</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                        <img loading="lazy" src={rahoveci} alt="rahoveci" width="30px"/>
                                        </div>
                                        <span className="font-medium">KF Rahoveci</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        
                                        <span className="font-medium">Kosovo First League</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        6
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        0
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                       0
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                      395'
                                       </div>
                                </td>
                            </tr>
                            <tr style={{background:"#1f2937"}} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                    
                                        <span className="font-medium">2022/23</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                        <img src={roj} loading="lazy" alt="roj" width="30px"/>
                                        </div>
                                        <span className="font-medium">FC Roj</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        
                                        <span className="font-medium">Germany Bezirksliga</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        2
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        0
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                       0
                                       </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                    180'
                                       </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       
    </div>
   
   </div>
  );
}

export default Cards;
