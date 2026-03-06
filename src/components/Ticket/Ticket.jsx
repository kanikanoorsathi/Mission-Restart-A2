import React from 'react';

const Ticket = ({ticket}) => {
    console.log(ticket)
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 my-6">
            <div className='flex flex-wrap justify-between mb-3'>
                <h3 className='font-bold text-xl text-black'>{ticket.title}</h3>
                <span className='badge badge-success text-white '>Open</span>
            </div>
            <p className='font-normal text-gray-500 text-base'>{ticket.description}</p>
            <div className='grid grid-cols-2'>
                <div className='flex justify-start'>
                    <p className='font-normal text-gray-500 text-base mr-6'>{ticket.id}</p>
                    <p className='font-normal text-red-600 text-sm'>{ticket.priority}</p>
                </div>
                <div className='flex flex-wrap justify-between gap-1'>
                    <p className='font-normal text-gray-500 text-base'>{ticket.customer}</p>
                    <p className='font-normal text-gray-500 text-base'>{ticket.createdAt}</p>

                </div>
            </div>
            
        </div>
    );
};

export default Ticket;