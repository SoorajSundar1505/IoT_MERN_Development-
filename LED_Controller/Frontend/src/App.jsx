import React, { useState } from "react";
import axios from "axios";

function App() {
  const [ledStatus, setLedStatus] = useState("OFF");
  
  // send command to the backend
  const controlLED = async (command) => {
    try {
      await axios.post("http://localhost:5000/led", { command });
      setLedStatus(command);
    } catch (error) {
      console.error("Error controlling LED:", error);
    }
  };

  // Fetch LED status
  const fetchLEDStatus = async () => {
    try {
      const response = await axios.get("http://localhost:5000/led-status");
      setLedStatus(response.data.status);
    } catch (error) {
      console.error("Error fetching LED status:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Arduino LED Controller</h1>
      <p className="mb-4 text-lg">LED Status: <span className="font-semibold">{ledStatus}</span></p>
      <div className="flex space-x-4">
        <button
          onClick={() => controlLED("ON")}
          className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md"
        >
          Turn ON
        </button>
        <button
          onClick={() => controlLED("OFF")}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md"
        >
          Turn OFF
        </button>
      </div>
      {/* <button
        onClick={fetchLEDStatus}
        className="mt-6 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md"
      >
        Refresh Status
      </button> */}
    </div>
  );
}

export default App;
