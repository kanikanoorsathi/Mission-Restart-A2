import React, { Suspense, useState } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import Banner from '../Banner/Banner';





const ticktCardPromise = fetch('tickets.json')
.then(res => res.json());

const Main = () => {
// new code add

    const [pendingTickets, setPendingTickets] = useState([]);
    const [resolvedTickets, setResolvedTickets] = useState([]);
    const [inProgress, setInProgress] = useState(0);
    const [resolved, setResolved] = useState(0)
    const [alertMsg, setalertMsg] = useState('')

const handlePendingClick =(ticket) => {
    setPendingTickets((prev) => [...prev, ticket])
    setInProgress((prev) => prev + 1);
}

const handleComplete = (ticket) =>{
    setPendingTickets(prev => prev.filter(t=>t.id !== ticket.id));
    setResolvedTickets(prev => [...prev,ticket]);
    setInProgress(prev => prev- 1);
    setResolved(prev => prev + 1);
    //console.log("alert added")
    // alert message added
    setalertMsg(`"${ticket.title}" ticket completed!`);
    // 5 sec pore alert hide
    setTimeout(() => {
        setalertMsg('');
    }, 2000)
   
    

}
// new code ende
    return (
       <>
       
        <Banner inProgress={inProgress} resolved={resolved}></Banner>
        {
            alertMsg && (
                <div className='alert alert-success fixed top-20 right-20 shadow-lg z-500'>
                    <span>{alertMsg}</span>
                </div>
            )
        }
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mx-auto px-3'>
            {/* left side */}
            <div className='lg:col-span-3'>
                <h2 className='font-semibold text-xl text-black my-4 text-center lg:text-start'>Customer Tickets</h2>
                <Suspense fallback={<h3>card data loading</h3>}>
                    <TicketCard ticktCardPromise={ticktCardPromise} handlePendingClick ={handlePendingClick}></TicketCard>
                </Suspense>

            </div>
            {/* right side */}
            <div>
                <div>
                    <h2 className='font-semibold text-xl text-black my-4 text-center lg:text-start'>Task Status</h2>
                    {/* new div */}
                    <div>
                        {
                            pendingTickets.map(ticket => (
                                <div className='bg-white p-8 rounded-xl shadow-sm border border-gray-100 my-6' key={ticket.id}>
                                    <p>{ticket.title}</p>
                                    <button onClick={() => handleComplete(ticket)}
                                             className='btn btn-base btn-success mt-2 w-full text-base'
                                        >
                                            Complete
                                    </button>
                                </div> 
                                
                            ))

                        }
                    </div>

                </div>

                <div>
                    <h2 className='font-semibold text-xl text-black my-4 text-center lg:text-start'>Resolved Task</h2>
                    <div>
                        {
                            resolvedTickets.map(ticket => (
                               <div className='btn btn-active p-2 w-full mb-4' key={ticket.id}>
                                   <p>{ticket.title}</p>
                               </div>
                            ))

                        }
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default Main;