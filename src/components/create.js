import React from 'react'
import { Navbar } from './navbar'
export const Create = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 ">
            <Navbar/>
        <div className="flex flex-row  justify-center">
            
          <div className="p-4 rounded-lg mt-10 bg-slate-200">
            <h1 className="text-yellow-500 font-bold p-4">Create New Item</h1>
            <div>
                <h1>Product Name</h1>
                <input placeholder="Name" className="rounded-lg" type="text"></input>
            </div>
            <div>
                <h1>Barcode</h1>
                <input placeholder="Barcode"  className="rounded-lg" type="text"></input>
            </div>
            <div>
                <h1>Initial Quantity</h1>
                <input placeholder="Quantity" className="rounded-lg" type="number"></input>
            </div>
            <div>
                <h1>Exp Date</h1>
                <input placeholder="Exp_Date"className="rounded-lg" type="text"></input>
            </div>
            <div>
                <h1>Manufacture Date</h1>
                <input placeholder="MFD" className="rounded-lg" type="text"></input>
            </div>
            <div>
                <h1>Product Picture</h1>
                <input placeholder="URL" className="rounded-lg" type="text"></input>
            </div>
            <div>
                <input className="rounded-lg p-2 bg-green-400 m-2" type="submit"></input>
            </div>
            </div>  
        </div>
        </div>
    )
}


