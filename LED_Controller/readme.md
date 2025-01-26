IoT LED Control with MERN Stack and Arduino UNO

This project focuses on integrating an Arduino UNO board with a web application using the MERN (MongoDB, Express.js, React, Node.js) stack. The user will be able to interact with the web app to control an LED, turning it on or off. The real-time status of the LED will be displayed on the web app, providing instant feedback.

Key Features:

    Control an LED through a web interface.
    Real-time status updates of the LED displayed on the web app.
    Seamless communication between the Arduino UNO and web app.

Technologies Used

    Arduino UNO: Used to control the LED and communicate with the web application via a serial interface.
    MERN Stack:
        Express.js: Server-side framework for handling API requests.
        React: Frontend framework to build the user interface.
        Node.js: Backend environment to run the server and manage the connection between the web app and Arduino.
    Socket.io: For real-time communication between the server and web app.

Installation
Step 1: Clone the repository

git clone <your-repository-url>
cd <your-project-directory>

Step 2: Install dependencies

Run the following command to install the necessary dependencies for both the backend and frontend:

npm install

Step 3: Set up the Arduino UNO

    Connect your Arduino UNO board to your computer via USB.
    Upload the Arduino code to your Arduino IDE that listens for commands from the web app and controls the LED.

Arduino code is available in BlinkLed.ino

Step 4: Run the Application

After setting up the Arduino, start the backend server and frontend server: node server.js and npm run dev
The web app will be available on http://localhost:<PORT>. Use the interface to control the LED.

Usage

    Web Interface: Open the web app in your browser. You will see a button to control the LED (Turn ON/OFF).
    Real-Time Updates: The web app will show the current status of the LED (ON/OFF) in real-time.