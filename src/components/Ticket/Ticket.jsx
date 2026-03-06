import { Calendar } from 'lucide-react';
import React from 'react';
// import { Calender } from 'lucide-react';

const Ticket = ({ticket}) => {
    //console.log(ticket)
    const {title, description, id, priority, customer, createdAt } = ticket
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:bg-violet-400 my-6">
            <div className='flex flex-wrap justify-between mb-3'>
                <h3 className='font-bold text-xl text-black'>{title}</h3>
                <span className='badge badge-success text-white '>Open</span>
            </div>
            <p className='font-normal text-gray-500 text-base'>{description}</p>
            <div className='grid grid-cols-2 py-4'>
                <div className='flex justify-start'>
                    <p className='font-normal text-gray-500 text-base mr-6'>#{id}</p>
                    <p className='font-normal text-red-600 text-sm'>{priority}</p>
                </div>
                <div className='flex flex-wrap justify-between'>
                    <p className='font-normal text-gray-500 text-base'>{customer}</p>
                    <p className='font-normal text-gray-500 text-sm'><Calendar size={14}></Calendar>{createdAt}</p>

                </div>
            </div>
            
        </div>
    );
};

export default Ticket;