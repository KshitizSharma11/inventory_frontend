import React from 'react'
import { useState } from 'react';
import {Navbar} from './navbar.js';

export const Update = () => {
    const [Item,SetItem]=useState('');
    const [search,setSearchedItem]=useState('');
    const [status,setRequestStatus]=useState(null);
const Search=async(event)=>{
event.preventDefault();
try{
const response = await fetch(`https://inventory-management-lakl.onrender.com/items/searchByName/${Item}`);
            const data = await response.json();
            setSearchedItem(data);
          
            if (response.ok) {
                // Set success message
                setRequestStatus('success');
                console.log('Item Found Successfully!');
            } else {
                // Set failure message
                setRequestStatus('failure');
                console.error('Failed to find item');
            }
        } catch (error) {
            // Set failure message
            setRequestStatus('failure');
            console.error('Error:', error);
        }

    };

    return (
        <div className="bg-gradient-to-r from-pink-600 to-purple-600">
          <Navbar/>
          <div>
            <div className="flex flex-row p-4 ml-20 mr-20 justify-center bg-slate-400 mt-10">
                <form onSubmit={Search}>
                    <h1>Enter Item To Be Searched</h1>
                    <input type="text" onChange={(e) => SetItem(e.target.value)}></input>
                    <input type="submit" value="Search"></input>
                </form>
            </div>
           {status && (<div>
             <h1>{status=="success"?`Found Successfully`:`Akhil Failure`}</h1>
             <h1>{search.item.name}</h1>
             <h2>{search.item.quantity}</h2>
            </div>)
            }
            
            </div>  
        </div>
    )
}
