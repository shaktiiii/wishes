import React from 'react'
import sunny from "/daypc.mp4"


export default function GoodMorning() {
  return (
    <>
      <video
            autoPlay
            muted
            loop
            id="video-bg"
            className="h-full object-cover w-full"
          >
            <source src={sunny} type="video/mp4" />
          </video>
          <p
        className='text-blue-950 absolute top-1/2 w-full text-center px-4 font-bold text-6xl tracking-wide'
      >
        GOOD MORNING
      </p>
          <div className=" flex  gap-4 absolute mx-auto top-[70%] right-1/2 translate-x-1/2 text-white">
         <button
          // onClick={handleButtonClick}
          className="border p-4 w-[14em] border-white font-bold text-lg outline-none px-6 py-8 rounded-md"
        >
          Good Morning
        </button>
        <button
          onClick={() => {
            open();
          }}
          className="border nightss p-4 w-[14em] text-white font-bold text-lg outline-none px-6 py-8 rounded-md"
        >
          Happy New Year
        </button>
      </div>
    </>
  )
}
