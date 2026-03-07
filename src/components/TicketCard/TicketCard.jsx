import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

// const handlePendingClick = (ticket) => {
//     console.log("Click", ticket)
//     // toast("Your ticket is in progress")

//     // setPendingTickets((newTicket) => [...newTicket, ticket])
// }

const TicketCard = ({ticktCardPromise, handlePendingClick}) => {
    const ticketCard = use(ticktCardPromise);
   // console.log(ticketCard);
    return ( 
        <div>
            {/* <h3>TicketCart: {ticketCard.length}</h3> */}
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    ticketCard.map( ticket => <Ticket handlePendingClick= {handlePendingClick}  key ={ticket.id} ticket={ticket}></Ticket>)
                }
            </div>
            
        </div>
    );
};

export default TicketCard;