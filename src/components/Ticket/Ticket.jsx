import { Calendar } from 'lucide-react';
import React from 'react';
// import { Calender } from 'lucide-react';

const Ticket = ({ticket}) => {
    console.log(ticket);

    const priorityColor ={
        high: 'text-red-500',
        medium: 'text-yellow-500',
        low: 'text-green-500'

    } 
    
    const {title, status, description, id, priority, customer, createdAt } = ticket
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:bg-violet-400 my-6">
            <div className='flex flex-wrap justify-between mb-3'>
                <h3 className='font-bold text-xl text-black'>{title}</h3>
                {/* <span className='badge badge-success text-white '>{status}</span> */}
                <div className={`flex justify-center items-center gap-2 font-bold py-1 px-3 rounded-full ${status === "Open" ?"text-green-500 bg-green-200" : "text-yellow-500 bg-yellow-200" }`}>
                    <div className={`h-4 w-4  rounded-full ${status === "Open" ? "bg-green-500" : "bg-yellow-500"}`}></div>
                    <p>{status}</p>
                </div>
                
                
                <div>

                </div>
            </div>
            <p className='font-normal text-gray-500 text-base'>{description}</p>
            <div className='grid grid-cols-2 py-4'>
                <div className='flex justify-start'>
                    <p className='font-normal text-gray-500 text-base mr-6'>#{id}</p>
                    <h4 className={`uppercase ${priorityColor[priority.toLowerCase()]}`}>{priority}priority</h4>
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