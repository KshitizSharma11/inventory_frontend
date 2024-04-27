import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
export const Welcome = () => {
    return (
        <div>
        <div className=" pt-20 pb-4 flex flex-row justify-center">
            <h1 className="text-slate-900 font-bold text-3xl">Welcome To K-Store</h1>
        </div>
        <div className="flex flex-row justify-center">
        <img src={logo} className="h-72 w-58"/>

    </div >
    <div className="flex flex-row justify-center">
        <Link to="/start">
    <button className="p-4 mt-10 mb-10 bg-green-400 rounded-lg">Proceed</button>
    </Link>
    </div>
    </div>
    )
}
