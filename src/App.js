import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import useState from 'react'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
//import categoriesContext from './context'


const App = () => {
  //const [categories, setCategories] = useState(null)
  // const value = { categories, setCategories}
  return (
    <div className="app">
      {/* <CategoriesContext.Provider value={ value }> */}
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/Ticket' element={<TicketPage/>}/>
          <Route path='/Ticket/:id' element={<TicketPage editMode={true}/>}/>
        </Routes>
      </BrowserRouter>
      {/* </CategoriesContext.Provider> */}
    </div>
  )
}

export default App
