import React from "react";
import { useState } from "react";
import { Navbar } from "./navbar.js";

export const Update = () => {
  const [Item, SetItem] = useState("");
  const [search, setSearchedItem] = useState("");
  const [status, setRequestStatus] = useState(null);
  const Search = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://inventory-management-lakl.onrender.com/items/searchByName/${Item}`
      );
      const data = await response.json();
      setSearchedItem(data);

      if (response.ok) {
        // Set success message
        setRequestStatus("success");
        console.log("Item Found Successfully!");
      } else {
        // Set failure message
        setRequestStatus("failure");
        console.error("Failed to find item");
      }
    } catch (error) {
      // Set failure message
      setRequestStatus("failure");
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-pink-600 to-purple-600">
      <Navbar />
      <div>
        <div className="flex flex-row p-4 ml-20 mr-20 justify-center bg-slate-400 mt-10">
          <form onSubmit={Search}>
            <h1>Enter Item To Be Searched</h1>
            <input
              type="text"
              onChange={(e) => SetItem(e.target.value)}
            ></input>
            <input type="submit" value="Search"></input>
          </form>
        </div>
        {status && (
          <div>
            <h1
              className={`text-center bg-slate-200 font-bold p-4 ${
                status == "success" ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {status == "success"
                ? `Found Successfully`
                : `Failure Unable To Find Any`}
            </h1>
            {status == "success" && (
              <div
                key={search.item._id}
                className="border-3 rounded-lg bg-orange-400"
              >
                <div className="flex flex-row justify-center p-4">
                  <img src={search.item.pic} alt="item" className="h-52 w-45" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-center">{search.item.name}</h2>
                  <h3 className="text-center">{search.item.quantity}</h3>
                </div>
                <div className="flex flex-row justify-evenly">
                  <h3>{search.item.barcode}</h3>
                </div>
              </div>
            )}
          </div>
        )}
        <div>
          <div className="flex flex-col items-center">
            <legend>Stock In Or Out Inventory:</legend>
            <form>
              <fieldset>
                <div class="flex flex-row justify-center">
                  <input type="radio" id="IN" value="IN" />
                  <label for="contactChoice1">IN</label>
                </div>
                <div class="flex flex-row justif-center">
                  <input type="radio" id="IN" value="OUT" />
                  <label for="contactChoice1">OUT</label>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
