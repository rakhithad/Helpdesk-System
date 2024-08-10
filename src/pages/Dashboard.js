import TicketCard from '../components/TicketCard'

const Dashboard = () => {

    const tickets = [
        {
            category: "q1 2022",
            color: "red",
            title: "Update the website",
            owner: "John Doe",
            status: "In Progress",
            priority: "5",
            progress: "50",
            description: "Update the website with the new design",
            timestamp: "2021-10-01T12:00:00Z"
        },{
            category: "q2 2022",
            color: "yellow",
            title: "run the website",
            owner: "rakhitha praba Doe",
            status: "Done",
            priority: "3",
            progress: "20",
            description: "run the website with the old design",
            timestamp: "2021-10-01T12:00:00Z"
        },{
            category: "q1 2022",
            color: "green",
            title: "call the admin",
            owner: "kavishka praba Doe",
            status: "Stuck",
            priority: "1",
            progress: "90",
            description: "call to admin and geather info",
            timestamp: "2041-12-05T1208:00Z"
        }
    ]
    const colors =['rgb(255,179,186)', 'rgb(255,221,186)', 'rgb(255,223,186)', 'rgb(186,255,255)', 'rgb(186,201,255', 'rgb(255,186,255)']

    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]

    console.log(uniqueCategories)
    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories.map((uniqueCategory, categoryIndex) => (
                    <div className={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                    id={_index}
                                    color={colors[categoryIndex] || colors[0]}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Dashboard