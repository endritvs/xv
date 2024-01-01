import React from 'react'
import xv from "../careerPhotos/roj.jpeg";
import ksavit from "../careerPhotos/ksavit.jpeg";

function Home() {
  return (
    <div className="home">
    <section className="pb-10 pt-20">
    <div className="flex flex-col px-4 mx-auto space-y-12 max-w-7xl lg:px-12">
   
        <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <img className="rounded-lg shadow-xl" src={xv} alt="sss" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-5 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">DEFENDER</p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-4xl text-zinc-50">Hello I'm <span className="text-indigo-600 font-extrabold">XHAVIT VELIU</span></h3>
                <p className="mt-5 text-lg text-zinc-50 text md:text-left">
                Xhavit Veliu is a 20 year old professional football player which currently plays as a center back in FC Roj (Germany). 
Earlier played professional football in highest divisions of Kosovo and Serbia . 
The 187cm tall albanian is known for his intelligent play and his physique which is very rarely seen in a such young center back.
                </p>
               
            </div>
        </div>
        <div className="flex px-4 flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center max-sm:justify-center mb-8 w-full">
                <img style={{height:"450px"}} className="rounded-lg shadow-xl" src={ksavit} alt="xhavit" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">OPINION</p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-4xl text-zinc-50"><span className="text-indigo-600 font-extrabold">About</span> football!</h3>
                <p className="mt-5 text-lg text-zinc-50 text md:text-left">"Football is a sport which requires a lot of work and dedication , at the same time you have to enjoy the beauty of it !" - Xhavit Veliu</p>
            </div>
        </div>
    </div>
</section>
 </div>

  )
}

export default Home