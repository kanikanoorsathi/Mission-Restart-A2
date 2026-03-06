import React, { Suspense } from 'react';
import TicketCard from '../TicketCard/TicketCard';

// import TicketCard from '../TicketCard/TicketCard';

const ticktCardPromise = fetch('tickets.json')
.then(res => res.json());

const Main = () => {
    return (

        
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mx-auto px-3'>
            <div className='lg:col-span-3'>
                <h2 className='font-semibold text-xl text-black my-4'>Customer Tickets</h2>
                <Suspense fallback={<h3>card data loading</h3>}>
                    <TicketCard ticktCardPromise={ticktCardPromise}></TicketCard>
                </Suspense>

            </div>
            <div>
                <h2 className='font-semibold text-xl text-black my-4'>Task Status</h2>
            </div>
            
        </div>
    );
};

export default Main;