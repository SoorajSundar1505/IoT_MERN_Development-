import express from "express";
import cors from "cors";
import { SerialPort, ReadlineParser } from "serialport";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Initialize SerialPort and BaudRate
const serialPort = new SerialPort({
  path: "COM3", 
  baudRate: 9600,
});

const parser = serialPort.pipe(new ReadlineParser({ delimiter: "\n" }));

// Store LED status
let ledStatus = "OFF";

// Handle data from Arduino
parser.on("data", (data) => {
  console.log("Arduino Response:", data.trim());
  ledStatus = data.trim().includes("ON") ? "ON" : "OFF";
});

// Endpoint to Set LED status - contol Arduino
app.post("/led", (req, res) => {
  const { command } = req.body;

  if (command === "ON" || command === "OFF") {
    serialPort.write(`${command}\n`, (err) => {
      if (err) {
        console.error("Error writing to serial port:", err.message);
        return res.status(500).send("Failed to send command to Arduino.");
      }
      res.send(`Command '${command}' sent to Arduino.`);
    });
  } else {
    res.status(400).send("Invalid command. Use 'ON' or 'OFF'.");
  }
});

// Endpoint to get LED status
app.get("/led-status", (req, res) => {
  res.json({ status: ledStatus });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
