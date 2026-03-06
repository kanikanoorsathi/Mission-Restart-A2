import React, { useState } from 'react';
import vector1 from "../../assets/vector1.png";
// import vector2 from "../../assets/vector2.png"

const Banner = () => {
    const [inProgress, setInProgress] = useState(0);
    const [resolved , setResolved] = useState(0);
    return (
        <div className='mx-auto my-10'>
            <div className='flex flex-col lg:flex-row justify-between items-center text-white gap-8 mt-12'>
                {/* 1st card here */}
                <div className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-lg p-20 w-full relative overflow-hidden shadow-lg'>
                    {/* left img */}
                    <img className='absolute left-0 top-0 h-full object-cover pointer-events-none' 
                         src={vector1} alt="vector1" 
                    />
                    {/* right img */}
                    <img className='absolute right-0 top-0 h-full object-cover pointer-events-none -scale-x-100'
                       src={vector1} alt="vector1" 
                    />
                    <h2 className='font-bold text-2xl text-white text-center'>In-Progress</h2>
                    <p className='font-semibold text-4xl text-white text-center mt-4'>{inProgress}</p>
                </div>
                {/* 2nd card here */}
                <div className='bg-linear-to-br from-[#54CF68] to-[#00827A] rounded-lg p-20 w-full relative overflow-hidden shadow-lg'>
                    {/* left img */}
                    <img className='absolute left-0 top-0 h-full object-cover pointer-events-none' 
                         src={vector1} alt="vector1" 
                    />
                    {/* right img */}
                    <img className='absolute right-0 top-0 h-full object-cover pointer-events-none -scale-x-100'
                       src={vector1} alt="vector1" 
                    />
                    <h2 className='font-bold text-2xl text-white text-center'>Resolved</h2>
                    <p className='font-semibold text-4xl text-white text-center mt-4'>{resolved}</p>
                </div>
                {/* <img src={vector1} alt="vector1" /> */}
            </div>
            <div></div>
        </div>
    );
};

export default Banner;