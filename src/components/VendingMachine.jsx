import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css'

function VendingMachine(){

    return (
        <div className='background'>
            <h1>Vending Machine</h1>
            <div className='container'>
                <Link to='/chips'>Chips</Link>
                <Link to='/chocolate'>Chocolate</Link>
                <Link to='/soda'>Soda</Link>
            </div>
        </div>
    )
}

export default VendingMachine;