import React from 'react';
import vector1 from "../../assets/vector1.png";

const Banner = () => {
    return (
        <div className='grid'>
            <div className='bg-black'>
                <img src={vector1} alt="vector1" />
            </div>
            <div></div>
        </div>
    );
};

export default Banner;