import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar" style={{display:'flex', justifyContent:'space-between'}}>
            <Link to='/'>Home</Link>
            <Link to='/chips'>Chips</Link>
            <Link to='/chocolate'>Chocolate</Link>
            <Link to='/soda'>Soda</Link>
        </div>
    )
}

export default Navbar;