const StatusDisplay = ({status}) => {

    const getColor = (status) => {
        let color
        switch(status) {
            case "In Progress":
                color = "yellow"
                break
            case "Done":
                color = "green"
                break
            case "Stuck":
                color = "red"
                break
            default:
                color = "grey"
        }
        return color
    }




    return (
        <div className="status-display" style={{ backgroundColor: getColor(status)}}>{status}</div>
    )
}

export default StatusDisplay