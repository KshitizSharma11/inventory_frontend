import React from 'react'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div>
            <nav >
        <ul className="flex flex-grow justify-around text-slate-200 pt-4">
        <Link to="/create"><li>Create_Entity</li></Link>
        <Link to="/updt"><li>Update_Inventory</li></Link>
       
        <Link to="/start"><li>See_All</li></Link>
        <li>Depleting_Inventory</li>
        </ul>

      </nav>
        </div>
    )
}
