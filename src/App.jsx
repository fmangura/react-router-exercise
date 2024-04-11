import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import VendingMachine from './components/VendingMachine'
import Chips from './components/Chips'; 
import Soda from './components/Soda';
import Chocolate from './components/Chocolate';
import Navbar from './components/Navbar';

function App() {

  return (
    <div style={{display:'block', justifyContent:'center', alignContent:'center'}}>
      <BrowserRouter>
            <Navbar />
        <Routes>
            <Route path='/' element={<VendingMachine />}/>
            <Route path='/chips' element={<Chips/>}/>
            <Route path='/chocolate' element={<Chocolate/>}/>
            <Route path='/soda' element={<Soda/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
