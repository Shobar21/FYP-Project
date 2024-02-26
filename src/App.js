import logo from './logo.svg'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllProducts from './Pages/AllProducts'
import Details from './Pages/Details'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
        <Route element={<AllProducts />} path='/Allproducts' />
        <Route element={<Details />} path='/details/:id' />
      </Routes>
    </Router>
  )
}

export default App
