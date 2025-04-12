import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Bundle = ({edit}) => {
    const [form,setForm] = useState([
        {adult:0,child:0,infant:0},{longe:''},{date:'',airline:''}
    ])
    const location = useLocation()

    if (location.pathname === "/product-arrival") {
       
        return <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-center text-xl font-semibold text-[#96005A] mb-4">
          MAKE AN ARRIVAL BOOKING
        </h2>
  
        <div className="mb-6">
          <label className="block text-sm font-medium text-red-600 mb-1">
            Fill all the fields marked with *
          </label>
          <p className="text-sm font-semibold mb-2">👥 Number of Guests*</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm block">Adult (above 12)</label>
              <select className="w-full border border-gray-300 rounded p-2">
                {[...Array(10).keys()].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm block">Child (2-12 years)</label>
              <select className="w-full border border-gray-300 rounded p-2">
                {[...Array(10).keys()].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm block">Infant (under 2)</label>
              <select className="w-full border border-gray-300 rounded p-2">
                {[...Array(10).keys()].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
  
        
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">📍 Enter Arrival Booking Information</h3>
  
          <label className="block text-sm mb-1">Select Your Lounge*</label>
          <select className="w-full border border-gray-300 rounded p-2 mb-4">
            <option>Select...</option>
          </select>
  
          <p className="bg-green-100 text-green-700 text-sm p-2 rounded mb-4">
            Please enter flight details based on your confirmed Airline Itinerary or Ticket.
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input type="date" className="border p-2 rounded" placeholder="Flight Date*" />
            <select className="border p-2 rounded">
              <option>Name of Airline*</option>
            </select>
            <input type="text" className="border p-2 rounded" placeholder="Airline ID" />
            <select className="border p-2 rounded">
              <option>Flight Number*</option>
            </select>
            <input type="time" className="border p-2 rounded col-span-2 md:col-span-1" placeholder="Flight Time" />
          </div>
        </div>
  
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">📍 Enter Departure Booking Information</h3>
  
          <label className="block text-sm mb-1">Select Your Lounge*</label>
          <select className="w-full border border-gray-300 rounded p-2 mb-4">
            <option>Select...</option>
          </select>
  
          <p className="bg-green-100 text-green-700 text-sm p-2 rounded mb-4">
            Please enter flight details based on your confirmed Airline Itinerary or Ticket.
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input type="date" className="border p-2 rounded" placeholder="Flight Date*" />
            <select className="border p-2 rounded">
              <option>Name of Airline*</option>
            </select>
            <input type="text" className="border p-2 rounded" placeholder="Airline ID" />
            <select className="border p-2 rounded">
              <option>Flight Number*</option>
            </select>
            <input type="time" className="border p-2 rounded col-span-2 md:col-span-1" placeholder="Flight Time" />
          </div>
        </div>
      
        <p className="text-sm text-red-500 mb-4">
          In case the system doesn't recognize your flight,{" "}
          <a href="#" className="underline text-blue-600">
            send us a manual booking request
          </a>
        </p>
  
        <div className="text-right">
          <button className="bg-[#96005A] hover:bg-[#7a004b] text-white font-semibold px-4 py-2 rounded">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
      }
    
      if (location.pathname === "/product-departure") {
        return edit?<h1>loading</h1>:<div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-center text-xl font-semibold text-[#96005A] mb-4">
        MAKE AN DEPARTURE BOOKING
      </h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-red-600 mb-1">
          Fill all the fields marked with *
        </label>
        <p className="text-sm font-semibold mb-2">👥 Number of Guests*</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-sm block">Adult (above 12)</label>
            <select className="w-full border border-gray-300 rounded p-2">
              {[...Array(10).keys()].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm block">Child (2-12 years)</label>
            <select className="w-full border border-gray-300 rounded p-2">
              {[...Array(10).keys()].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm block">Infant (under 2)</label>
            <select className="w-full border border-gray-300 rounded p-2">
              {[...Array(10).keys()].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">📍 Enter Arrival Booking Information</h3>

        <label className="block text-sm mb-1">Select Your Lounge*</label>
        <select className="w-full border border-gray-300 rounded p-2 mb-4">
          <option>Select...</option>
        </select>

        <p className="bg-green-100 text-green-700 text-sm p-2 rounded mb-4">
          Please enter flight details based on your confirmed Airline Itinerary or Ticket.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <input type="date" className="border p-2 rounded" placeholder="Flight Date*" />
          <select className="border p-2 rounded">
            <option>Name of Airline*</option>
          </select>
          <input type="text" className="border p-2 rounded" placeholder="Airline ID" />
          <select className="border p-2 rounded">
            <option>Flight Number*</option>
          </select>
          <input type="time" className="border p-2 rounded col-span-2 md:col-span-1" placeholder="Flight Time" />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">📍 Enter Departure Booking Information</h3>

        <label className="block text-sm mb-1">Select Your Lounge*</label>
        <select className="w-full border border-gray-300 rounded p-2 mb-4">
          <option>Select...</option>
        </select>

        <p className="bg-green-100 text-green-700 text-sm p-2 rounded mb-4">
          Please enter flight details based on your confirmed Airline Itinerary or Ticket.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <input type="date" className="border p-2 rounded" placeholder="Flight Date*" />
          <select className="border p-2 rounded">
            <option>Name of Airline*</option>
          </select>
          <input type="text" className="border p-2 rounded" placeholder="Airline ID" />
          <select className="border p-2 rounded">
            <option>Flight Number*</option>
          </select>
          <input type="time" className="border p-2 rounded col-span-2 md:col-span-1" placeholder="Flight Time" />
        </div>
      </div>
    
      <p className="text-sm text-red-500 mb-4">
        In case the system doesn't recognize your flight,{" "}
        <a href="#" className="underline text-blue-600">
          send us a manual booking request
        </a>
      </p>

      <div className="text-right">
        <button className="bg-[#96005A] hover:bg-[#7a004b] text-white font-semibold px-4 py-2 rounded">
          CHECK AVAILABILITY
        </button>
      </div>
    </div>
      }
    
      if (location.pathname === "/product-bundle") {
        return <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-center text-xl font-semibold text-[#96005A] mb-4">
          MAKE AN ARRIVAL & DEPARTURE BOOKING
        </h2>
  
        <div className="mb-6">
          <label className="block text-sm font-medium text-red-600 mb-1">
            Fill all the fields marked with *
          </label>
          <p className="text-sm font-semibold mb-2">👥 Number of Guests*</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm block">Adult (above 12)</label>
              <select className="w-full border border-gray-300 rounded p-2">
                {[...Array(10).keys()].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm block">Child (2-12 years)</label>
              <select className="w-full border border-gray-300 rounded p-2">
                {[...Array(10).keys()].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm block">Infant (under 2)</label>
              <select className="w-full border border-gray-300 rounded p-2">
                {[...Array(10).keys()].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
  
        
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">📍 Enter Arrival Booking Information</h3>
  
          <label className="block text-sm mb-1">Select Your Lounge*</label>
          <select className="w-full border border-gray-300 rounded p-2 mb-4">
            <option>Select...</option>
          </select>
  
          <p className="bg-green-100 text-green-700 text-sm p-2 rounded mb-4">
            Please enter flight details based on your confirmed Airline Itinerary or Ticket.
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input type="date" className="border p-2 rounded" placeholder="Flight Date*" />
            <select className="border p-2 rounded">
              <option>Name of Airline*</option>
            </select>
            <input type="text" className="border p-2 rounded" placeholder="Airline ID" />
            <select className="border p-2 rounded">
              <option>Flight Number*</option>
            </select>
            <input type="time" className="border p-2 rounded col-span-2 md:col-span-1" placeholder="Flight Time" />
          </div>
        </div>
  
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">📍 Enter Departure Booking Information</h3>
  
          <label className="block text-sm mb-1">Select Your Lounge*</label>
          <select className="w-full border border-gray-300 rounded p-2 mb-4">
            <option>Select...</option>
          </select>
  
          <p className="bg-green-100 text-green-700 text-sm p-2 rounded mb-4">
            Please enter flight details based on your confirmed Airline Itinerary or Ticket.
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input type="date" className="border p-2 rounded" placeholder="Flight Date*" />
            <select className="border p-2 rounded">
              <option>Name of Airline*</option>
            </select>
            <input type="text" className="border p-2 rounded" placeholder="Airline ID" />
            <select className="border p-2 rounded">
              <option>Flight Number*</option>
            </select>
            <input type="time" className="border p-2 rounded col-span-2 md:col-span-1" placeholder="Flight Time" />
          </div>
        </div>
      
        <p className="text-sm text-red-500 mb-4">
          In case the system doesn't recognize your flight,{" "}
          <a href="#" className="underline text-blue-600">
            send us a manual booking request
          </a>
        </p>
  
        <div className="text-right">
          <button className="bg-[#96005A] hover:bg-[#7a004b] text-white font-semibold px-4 py-2 rounded">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
      }
    

    }

export default Bundle;
