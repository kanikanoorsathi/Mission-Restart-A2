import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const TicketCard = ({ticktCardPromise}) => {
    const ticketCard = use(ticktCardPromise);
   // console.log(ticketCard);
    return (
        <div>
            {/* <h3>TicketCart: {ticketCard.length}</h3> */}
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    ticketCard.map( ticket => <Ticket key ={ticket.id} ticket={ticket}></Ticket>)
                }
            </div>
            
        </div>
    );
};

export default TicketCard;