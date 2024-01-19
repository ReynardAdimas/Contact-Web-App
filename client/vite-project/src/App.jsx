import Dashboard from './components/dashboard' 
import Add from './components/add' 
import Delete from './components/delete' 
import Home from './components/home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/add' element={<Add />}/> 
        <Route path='/delete' element={<Delete />}/>
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
