
import foto4 from "../careerPhotos/foto-4.jpeg";
import foto7 from "../careerPhotos/foto-7.jpeg";
import foto11 from "../careerPhotos/foto-11.jpeg";
import foto12 from "../careerPhotos/foto-12.jpeg";
import foto14 from "../careerPhotos/foto-14.jpeg";
import ksav from "../careerPhotos/fot-45.jpeg";


export default function SliderComponent() {
    return (
        <div className="gallery">
              <p className="mb-2 text-m font-semibold leading-none text-center mr-50  text-indigo-600 uppercase ">
        PHOTOS
      </p>
      <h3 className="mt-2 text-4xl text-center text-zinc-50 mb-2 px-2">
        Some of my{" "}
        <span className="font-extrabold text-indigo-600">career photos!</span>
      </h3>
      
            <section className="overflow-hidden text-gray-700">
  <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
        
    <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={foto14} loading="lazy"/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={foto12} loading="lazy"/>
        </div>
      <div className="flex flex-wrap w-1/2">
     
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={foto7} loading="lazy"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={foto4} loading="lazy"/>
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={ksav} loading="lazy"/>
        </div>
    
      </div>
      <div className="flex flex-wrap w-full">
      <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={foto11} loading="lazy"/>
        </div>
       
    </div>
  </div>
</section>
        </div>
    );
}
