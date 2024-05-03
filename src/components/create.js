import React, { useState } from 'react';
import { Navbar } from './navbar';

export const Create = () => {
    // State variables to hold form data
    const [productName, setProductName] = useState('');
    const [barcode, setBarcode] = useState('');
    const [initialQuantity, setInitialQuantity] = useState('');
    const [expDate, setExpDate] = useState('');
    const [manufactureDate, setManufactureDate] = useState('');
    const [productPicture, setProductPicture] = useState('');
    const [requestStatus, setRequestStatus] = useState(null);

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Constructing the payload
        const payload = {
            name: productName,
            barcode,
            mfd: manufactureDate,
            exp: expDate,
            quantity: initialQuantity,
            pic: productPicture
        };

        try {
            // Making the POST request
            const response = await fetch('https://inventory-management-lakl.onrender.com/items/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // Set success message
                setRequestStatus('success');
                console.log('Item created successfully!');
            } else {
                // Set failure message
                setRequestStatus('failure');
                console.error('Failed to create item');
            }
        } catch (error) {
            // Set failure message
            setRequestStatus('failure');
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 ">
            <Navbar />
            {requestStatus && (
                <div className="flex justify-center p-4">
                    <p className={`font-bold ${requestStatus === 'success' ? 'text-green-500 p-1 bg-slate-200' : 'text-red-500 p-1 bg-slate-200'}`}>
                        {requestStatus === 'success' ? 'Item created successfully!' : 'Failed to create item'}
                    </p>
                </div>
            )}
            <div className="flex flex-row  justify-center">
                <div className="p-4 rounded-lg mt-10 bg-slate-200">
                    <h1 className="text-yellow-500 font-bold p-4">Create New Item</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1>Product Name</h1>
                            <input
                                placeholder="Name"
                                className="rounded-lg p-1"
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>
                        <div>
                            <h1>Barcode</h1>
                            <input
                                placeholder="Barcode"
                                className="rounded-lg p-1"
                                type="text"
                                value={barcode}
                                onChange={(e) => setBarcode(e.target.value)}
                            />
                        </div>
                        <div>
                            <h1>Manufacture Date</h1>
                            <input
                                placeholder="Manufacture Date"
                                className="rounded-lg p-1"
                                type="date"
                                value={manufactureDate}
                                onChange={(e) => setManufactureDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <h1>Exp Date</h1>
                            <input
                                placeholder="Exp Date"
                                className="rounded-lg p-1"
                                type="date"
                                value={expDate}
                                onChange={(e) => setExpDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <h1>Initial Quantity</h1>
                            <input
                                placeholder="Quantity"
                                className="rounded-lg p-1"
                                type="number"
                                value={initialQuantity}
                                onChange={(e) => setInitialQuantity(e.target.value)}
                            />
                        </div>
                        <div>
                            <h1>Product Picture</h1>
                            <input
                                placeholder="Product Picture URL"
                                className="rounded-lg p-1"
                                type="text"
                                value={productPicture}
                                onChange={(e) => setProductPicture(e.target.value)}
                            />
                        </div>
                        <div>
                            <input className="rounded-lg p-2 bg-green-400 m-2" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
