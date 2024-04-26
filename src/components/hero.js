import React from 'react'
import logo from '../assets/logo.png';
export const Hero = () => {
    return (
        <div>
        <div className="flex flex-row justify-center">
            <img src={logo} className="h-72 w-58"/>
    
        </div >
        <div className="flex flex-row justify-center">
        <button className="p-4 mt-10 mb-10 bg-green-400 rounded-lg">Proceed</button>
        </div>
        </div>
       
    )
}
