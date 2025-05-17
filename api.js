// Sample data for doctors
const doctors = [
    {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        contact: "+1234567890",
        clinicAddress: "123 Heart St, Cardiocity, USA",
        image: "https://via.placeholder.com/80"
    },
    {
        name: "Dr. Michael Adams",
        specialty: "Dermatologist",
        contact: "+0987654321",
        clinicAddress: "456 Skin Ave, Dermaville, USA",
        image: "https://via.placeholder.com/80"
    }
    // Add more doctors here...
];

// Your Google Maps API Key
const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; 

// Get user's current location using Geolocation API
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                error => {
                    reject(error);
                }
            );
        } else {
            reject(new Error('Geolocation is not supported by this browser.'));
        }
    });
}

// Function to get coordinates of the clinic/hospital using Google Maps Geocoding API
async function getCoordinates(address) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
    const data = await response.json();
    if (data.results.length > 0) {
        return data.results[0].geometry.location;
    } else {
        throw new Error('Address not found');
    }
}

// Function to open Google Maps with directions
function openGoogleMaps(start, destination) {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${start.lat},${start.lng}&destination=${destination.lat},${destination.lng}&travelmode=driving`;
    window.open(url, '_blank');
}

// Function to display doctors and add directions functionality
async function displayDoctors() {
    const doctorList = document.getElementById('doctor-list');
    
    for (const doctor of doctors) {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';
        
        // Get the coordinates for the doctor's clinic
        let clinicCoordinates;
        try {
            clinicCoordinates = await getCoordinates(doctor.clinicAddress);
        } catch (error) {
            console.error(`Could not find location for ${doctor.clinicAddress}`);
            continue;
        }

        // Create doctor card HTML
        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <h4>${doctor.name}</h4>
            <p>${doctor.specialty}</p>
            <p>Contact: ${doctor.contact}</p>
            <p>Clinic: ${doctor.clinicAddress}</p>
            <button class="get-directions-btn">Get Directions</button>
        `;

        // Add event listener for "Get Directions" button
        const directionsBtn = doctorCard.querySelector('.get-directions-btn');
        directionsBtn.addEventListener('click', async () => {
            try {
                const userLocation = await getUserLocation();
                openGoogleMaps(userLocation, clinicCoordinates);
            } catch (error) {
                console.error('Error fetching user location:', error);
                alert('Unable to fetch your location. Please enable location services.');
            }
        });

        // Append the card to the doctor list
        doctorList.appendChild(doctorCard);
    }
}

// Initialize Google Maps (optional)
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12
    });
}

// Call the function to display doctors
document.addEventListener('DOMContentLoaded', displayDoctors);
