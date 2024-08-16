import {useState} from 'react'

const TicketPage = () => {

    const [FormData, setFormData] = useState({
        status: 'not started',
        progress: 0,
        timeStamp: new Date().toISOString(),
    })

    const  editMode = false

    const handleSubmit = () => {
        console.log('submitted')
    }
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
            })
        )
    }

    const categories = ['test1','test2']

    console.log(FormData)

    return (
        <div className="ticket">
            <h1>{editMode ? 'Update your tickcet' : 'Create a ticket'}</h1>
            <div className="ticket-container">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title">Title</label>
                        <input id="title" name="title" type="text" onChange={handleChange} required={true} value={FormData.title}></input>

                        <label htmlFor="">Description</label>
                        <input id="description" name="description" type="text" onChange={handleChange} required={true} value={FormData.description}></input>

                        <label htmlFor="category">Category</label>
                        <select id="category" name="category" type="text" onChange={handleChange} required={true} value={FormData.category}>
                            {categories?.map((category, _index) => (
                                <option key={_index} value={category}>{category}</option>
                            ))}
                        </select>
                        <label htmlFor="new-category">New Category</label>
                        <input id="new-category" name="category" type="text" onChange={handleChange} required={true} value={FormData.title}></input>

                        <label>Priority</label>
                        <div className="multiple-input-container">
                            <input id="priority-1" name="priority" type="radio" onChange={handleChange} value={1} checked={FormData.priority === 1}></input>
                            <label htmlFor="priority-1">1</label>
                            <input id="priority-2" name="priority" type="radio" onChange={handleChange} value={2} checked={FormData.priority === 2}></input>
                            <label htmlFor="priority-2">2</label>
                            <input id="priority-3" name="priority" type="radio" onChange={handleChange} value={3} checked={FormData.priority === 3}></input>
                            <label htmlFor="priority-3">3</label>
                            <input id="priority-4" name="priority" type="radio" onChange={handleChange} value={4} checked={FormData.priority === 4}></input>
                            <label htmlFor="priority-4">4</label>
                            <input id="priority-5" name="priority" type="radio" onChange={handleChange} value={5} checked={FormData.priority === 5}></input>
                            <label htmlFor="priority-5">5</label>
                        </div>
                        {editMode &&
                        <>
                        <input type="range" id="progress" name="progress" value={FormData.progress} min="0" max="100" onChange={handleChange}></input>
                        <label htmlFor="progress">progress</label>
                        
                        
                        <label>Status</label>
                        <select name="status" onChange={handleChange} value={FormData.status}>
                            <option selected={FormData.status === 'done'} value='done'>done</option>
                            <option selected={FormData.status === 'working on it'} value='working on it'>working on it</option>
                            <option selected={FormData.status === 'stuck'} value='stuck'>stuck</option>
                            <option selected={FormData.status === 'not started'} value='not started'>not started</option>
                        </select>
                        </>
                        }
                        
                        <input type="submit"></input>
                    </section>
                    <section>
                    <label htmlFor="owner">owner</label>
                    <input id="owner" name="owner" type="text" onChange={handleChange} required={true} value={FormData.owner}></input>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default TicketPage