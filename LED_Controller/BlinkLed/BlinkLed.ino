int ledPin = 13; // Built-in LED pin to Arduino board

void setup() {
  pinMode(ledPin, OUTPUT);  // Set LED pin as an output
  digitalWrite(ledPin, LOW); // Initialize LED as OFF
  Serial.begin(9600);       // Start serial communication
}

void loop() {
  if (Serial.available() > 0) {         // Check if data is available
    String command = Serial.readString(); // Read the command as a string
    command.trim();                     // Remove extra whitespace/newlines

    if (command == "ON") {
      digitalWrite(ledPin, HIGH);       // Turn LED ON
      Serial.println("LED is ON");     // Send status back to server
    } else if (command == "OFF") {
      digitalWrite(ledPin, LOW);        // Turn LED OFF
      Serial.println("LED is OFF");    // Send status back to server
    } else {
      Serial.println("Invalid Command"); 
    }
  }
}
