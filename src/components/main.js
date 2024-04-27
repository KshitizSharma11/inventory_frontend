import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const url = "https://inventory-management-lakl.onrender.com/items/getAll";

export const Main = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-slate-600">
      <h1 className="text-center pt-10 mb-10 p-2 text-2xl font-bold text-green-400">Inventory Details</h1>
      <div className="grid grid-cols-3 gap-4 justify-items-center text-slate-800">
        {items.map((item, index) => (
          <div key={item._id} className="border-4 rounded-lg bg-orange-400">
            <div className="flex flex-row justify-center p-3">
              <img src={item.pic || logo} alt="item" className="h-72 w-58" />
            </div>
            <div className="flex flex-col">
              <h2 className='text-center'>{item.name}</h2>
              <h3 className='text-center'>{item.quantity}</h3>
            </div>
            <div className="flex flex-row justify-evenly">
              <h3>{item.barcode}</h3>
              <h3>{item.exp}</h3>
              <h3>{item.mfd}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
