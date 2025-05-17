// Sample data for doctors
const doctors = [
    {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        contact: "+1234567890",
        image: "DoctorF.webp"
    },
    {
        name: "Dr. Michael Adams",
        specialty: "Dermatologist",
        contact: "+0987654321",
        image: "DoctorM.webp"
    },
    {
        name: "Dr. Anna Lee",
        specialty: "Pediatrician",
        contact: "+1122334455",
        image: "DoctorF2.png"
    },
    {
        name: "Dr. Rohit Mourya",
        specialty: "Neurosurgeon",
        contact: "+917852021030",
        image: "DoctorF2.png"
    }
];

// Function to display doctors and add event listeners
function displayDoctors() {
    const doctorList = document.getElementById('doctor-list');
    doctorList.innerHTML = ''; // Clear any existing content

    doctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';
        
        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <h4>${doctor.name}</h4>
            <p>Specialty: ${doctor.specialty}</p>
            <p>Contact: ${doctor.contact}</p>
            <button class="reach-out-btn">Reach Out</button>
        `;

        // Add event listener for the "Reach Out" button
        const reachOutBtn = doctorCard.querySelector('.reach-out-btn');
        reachOutBtn.addEventListener('click', () => {
            sendMessage(doctor.name, doctor.contact);
        });

        // Append the card to the doctor list
        doctorList.appendChild(doctorCard);
    });
}

// Function to open SMS app with pre-filled message
function sendMessage(doctorName, contactNumber) {
    const messageText = `Hello Dr. ${doctorName}, I would like to reach out regarding a medical consultation.`;

    // Use the SMS URI scheme to open the SMS app on mobile
    const smsLink = `sms:${contactNumber}?body=${encodeURIComponent(messageText)}`;
    
    // Redirect to the SMS link
    window.location.href = smsLink;
}

// Display doctors when the page loads
document.addEventListener('DOMContentLoaded', displayDoctors);
