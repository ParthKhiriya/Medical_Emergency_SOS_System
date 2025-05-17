# Medical_Emergency_SOS_System
A web-based application that helps users access emergency medical assistance quickly and efficiently. The system allows users to find nearby doctors, view their details, and directly send SMS messages for consultation—all through a clean, user-friendly interface.

📌 Features
🚑 Emergency SOS Button to alert and request help.

📍 Detects user’s location using the Geolocation API.

👨‍⚕️ Displays nearby doctors with name, specialty, and contact info.

📤 "Reach Out" button enables sending pre-filled SMS messages to doctors.

📸 Doctor images and details dynamically rendered from JavaScript.

📱 Mobile-optimized interface for real-time access during emergencies.

🛠️ Technologies Used
HTML5

CSS3

JavaScript (Vanilla)

Geolocation API

SMS URI scheme

[Optional] OpenStreetMap / Nominatim for geocoding

📱 How It Works
The user opens the website and their location is fetched.

A list of doctors is displayed from hardcoded data.

Each card shows doctor’s photo, specialty, contact, and a Reach Out button.

Clicking “Reach Out” opens the device's SMS app with a pre-written message to the doctor.

❗ Limitations
Requires a mobile device for SMS functionality.

No backend or database integration (static data only).

No real-time doctor availability or tracking.

Limited error handling for unsupported devices or offline status.

🧩 Future Enhancements
Database integration for storing doctor and user data

Real-time doctor availability and location tracking

Alternative communication methods (call, video, chat)

Improved privacy and security features
