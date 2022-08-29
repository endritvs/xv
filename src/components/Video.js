import React from 'react'

function Video() {
  return (
    <div className="video">
        <section className="overflow-hidden text-gray-700 ">
            
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
  <p className="mb-2 text-m font-semibold leading-none text-center mr-50  text-indigo-600 uppercase ">
        VIDEOS
      </p>
      <h3 className="mt-2 text-4xl text-center text-zinc-50 mb-2 ">
        Some of my{" "}
        <span className="font-extrabold text-indigo-600">career videos!</span>
      </h3>
   
<div className="grid mb-8 rounded-lg  border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-800 rounded-t-lg  border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <iframe className="w-11/12 h-80" src="https://www.youtube.com/embed/D5lukchMYTU" title='title'></iframe>
    </figure>
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-800 rounded-tr-lg  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <iframe className="w-11/12 h-80" src="https://www.youtube.com/embed/kmAi9M-oOqo" title='title'></iframe>    
    </figure>
  
</div>

  </div>
</section>
    </div>
  )
}

export default Video