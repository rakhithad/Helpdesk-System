import { Link } from 'react-router-dom'


import StatusDisplay from "./StatusDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import DeleteBlock from "./DeleteBlock"

const TicketCard = ({color, ticket}) => {
    return (
        
        <div className="ticket-card">
            <Link to={`/ticket/${ticket.documentId}`} id="link">
                <div className="ticket-color"></div>
                <h3>{ticket.title}</h3>
                
                <StatusDisplay ticket={ticket.status}/>
                <PriorityDisplay/>
                <ProgressDisplay/>
            </Link>
            <DeleteBlock/>
        </div>
    )
}

export default TicketCard