// Emergency contacts database for Bangladesh
const emergencyDatabase = {
    dhaka: {
        name: "Dhaka",
        hospitals: [
            {
                name: "Square Hospital Ltd.",
                address: "18/F, West Panthapath, Dhaka",
                phone: "01713455667",
                emergency: "01713455666"
            },
            {
                name: "United Hospital Ltd.",
                address: "Plot 15, Road 71, Gulshan, Dhaka",
                phone: "01755567890",
                emergency: "01755567891"
            },
            {
                name: "Apollo Hospitals Dhaka",
                address: "Plot 81, Block E, Bashundhara R/A, Dhaka",
                phone: "01744455667",
                emergency: "01744455668"
            },
            {
                name: "Dhaka Medical College Hospital",
                address: "Secretariat Road, Dhaka",
                phone: "01769000333",
                emergency: "01769000334"
            },
            {
                name: "Birdem Hospital",
                address: "Shahbagh, Dhaka",
                phone: "01711445566",
                emergency: "01711445567"
            }
        ],
        services: [
            { name: "Dhaka Police Control Room", number: "01713455660" },
            { name: "Dhaka Fire Service", number: "01769000111" },
            { name: "Dhaka Ambulance Service", number: "01769000222" },
            { name: "Women Helpline", number: "01769000333" },
            { name: "Child Helpline", number: "01769000444" }
        ]
    },
    chittagong: {
        name: "Chittagong",
        hospitals: [
            {
                name: "Chittagong Medical College Hospital",
                address: "K.B. Fazlul Kader Road, Chittagong",
                phone: "01711555667",
                emergency: "01711555668"
            },
            {
                name: "CSCR Hospital",
                address: "GEC Circle, Chittagong",
                phone: "01722667788",
                emergency: "01722667789"
            },
            {
                name: "Parkview Hospital",
                address: "2/J, CDA Avenue, Chittagong",
                phone: "01733778899",
                emergency: "01733778890"
            },
            {
                name: "Max Hospital & Diagnostic",
                address: "1020, O.R. Nizam Road, Chittagong",
                phone: "01744889900",
                emergency: "01744889901"
            }
        ],
        services: [
            { name: "Chittagong Police Control", number: "01711555660" },
            { name: "Chittagong Fire Service", number: "01711555661" },
            { name: "Port Ambulance Service", number: "01711555662" }
        ]
    },
    rajshahi: {
        name: "Rajshahi",
        hospitals: [
            {
                name: "Rajshahi Medical College Hospital",
                address: "Laxmipur, Rajshahi",
                phone: "01711555999",
                emergency: "01711555998"
            },
            {
                name: "Islami Bank Hospital",
                address: "Kazihata, Rajshahi",
                phone: "01711555997",
                emergency: "01711555996"
            },
            {
                name: "City Hospital",
                address: "Shaheb Bazar, Rajshahi",
                phone: "01711555995",
                emergency: "01711555994"
            }
        ],
        services: [
            { name: "Rajshahi Police", number: "01711555991" },
            { name: "Rajshahi Fire", number: "01711555992" },
            { name: "Rajshahi Ambulance", number: "01711555993" }
        ]
    },
    khulna: {
        name: "Khulna",
        hospitals: [
            {
                name: "Khulna Medical College Hospital",
                address: "Sonadanga, Khulna",
                phone: "01711555888",
                emergency: "01711555887"
            },
            {
                name: "Gazi Medical College Hospital",
                address: "Moylapota, Khulna",
                phone: "01711555886",
                emergency: "01711555885"
            },
            {
                name: "City Medical College Hospital",
                address: "Khulna City Corporation, Khulna",
                phone: "01711555884",
                emergency: "01711555883"
            }
        ],
        services: [
            { name: "Khulna Police", number: "01711555882" },
            { name: "Khulna Fire", number: "01711555881" },
            { name: "Khulna Ambulance", number: "01711555880" }
        ]
    },
    barisal: {
        name: "Barisal",
        hospitals: [
            {
                name: "Sher-e-Bangla Medical College Hospital",
                address: "Barisal Sadar, Barisal",
                phone: "01711555777",
                emergency: "01711555776"
            },
            {
                name: "Barisal General Hospital",
                address: "Sadar Road, Barisal",
                phone: "01711555775",
                emergency: "01711555774"
            }
        ],
        services: [
            { name: "Barisal Police", number: "01711555773" },
            { name: "Barisal Fire", number: "01711555772" },
            { name: "Barisal Ambulance", number: "01711555771" }
        ]
    },
    sylhet: {
        name: "Sylhet",
        hospitals: [
            {
                name: "Sylhet MAG Osmani Medical College",
                address: "Mirboxtula, Sylhet",
                phone: "01711555666",
                emergency: "01711555665"
            },
            {
                name: "North East Medical College",
                address: "Sylhet City Corporation, Sylhet",
                phone: "01711555664",
                emergency: "01711555663"
            },
            {
                name: "Jalalabad Ragib-Rabeya Medical College",
                email: "01711555662",
                emergency: "01711555661"
            }
        ],
        services: [
            { name: "Sylhet Police", number: "01711555660" },
            { name: "Sylhet Fire", number: "01711555659" },
            { name: "Sylhet Ambulance", number: "01711555658" }
        ]
    },
    rangpur: {
        name: "Rangpur",
        hospitals: [
            {
                name: "Rangpur Medical College Hospital",
                address: "Medical Road, Rangpur",
                phone: "01711555555",
                emergency: "01711555554"
            },
            {
                name: "Prime Hospital",
                address: "Station Road, Rangpur",
                phone: "01711555553",
                emergency: "01711555552"
            }
        ],
        services: [
            { name: "Rangpur Police", number: "01711555551" },
            { name: "Rangpur Fire", number: "01711555550" },
            { name: "Rangpur Ambulance", number: "01711555549" }
        ]
    },
    mymensingh: {
        name: "Mymensingh",
        hospitals: [
            {
                name: "Mymensingh Medical College Hospital",
                address: "Medical College Road, Mymensingh",
                phone: "01711555444",
                emergency: "01711555443"
            },
            {
                name: "Community Based Medical College",
                address: "Mymensingh City, Mymensingh",
                phone: "01711555442",
                emergency: "01711555441"
            }
        ],
        services: [
            { name: "Mymensingh Police", number: "01711555440" },
            { name: "Mymensingh Fire", number: "01711555439" },
            { name: "Mymensingh Ambulance", number: "01711555438" }
        ]
    }
};

// Function to load emergency contacts based on selected city
function loadEmergencyContacts() {
    const citySelect = document.getElementById('city');
    const selectedCity = citySelect.value;
    const contactsContainer = document.getElementById('emergency-contacts');
    const selectedCityName = document.getElementById('selected-city-name');
    const hospitalList = document.getElementById('hospital-list');
    const otherServices = document.getElementById('other-services');

    if (!selectedCity) {
        contactsContainer.style.display = 'none';
        return;
    }

    // Show loading state
    contactsContainer.style.display = 'block';
    hospitalList.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i> Loading hospitals...</div>';
    
    // Get city data
    const cityData = emergencyDatabase[selectedCity];
    
    if (!cityData) {
        hospitalList.innerHTML = '<div class="error-message">No data available for this city</div>';
        return;
    }

    // Update city name
    selectedCityName.textContent = cityData.name;

    // Load hospitals
    let hospitalsHTML = '';
    cityData.hospitals.forEach(hospital => {
        hospitalsHTML += `
            <div class="hospital-card">
                <h4>${hospital.name}</h4>
                <p><i class="fas fa-map-marker-alt"></i> ${hospital.address}</p>
                <div class="hospital-phone">
                    <a href="tel:${hospital.phone}" class="call-btn">
                        <i class="fas fa-phone"></i> Call
                    </a>
                    <span>${hospital.phone}</span>
                </div>
                ${hospital.emergency ? `
                <div class="hospital-phone" style="margin-top: 10px;">
                    <a href="tel:${hospital.emergency}" class="call-btn" style="background: #ff6b6b;">
                        <i class="fas fa-ambulance"></i> Emergency
                    </a>
                    <span>${hospital.emergency}</span>
                </div>
                ` : ''}
            </div>
        `;
    });
    hospitalList.innerHTML = hospitalsHTML;

    // Load other services
    let servicesHTML = '';
    cityData.services.forEach(service => {
        servicesHTML += `
            <div class="service-card">
                <div class="service-info">
                    <h4>${service.name}</h4>
                    <p>${service.number}</p>
                </div>
                <a href="tel:${service.number}" class="call-btn">
                    <i class="fas fa-phone"></i> Call
                </a>
            </div>
        `;
    });
    otherServices.innerHTML = servicesHTML;

    // Scroll to contacts
    contactsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Add event listener for city selection
document.getElementById('city').addEventListener('change', function() {
    if (this.value) {
        // Optional: Add analytics or tracking here
        console.log(`User selected: ${this.value}`);
    }
});

// Function to handle call button clicks
function handleCallClick(phoneNumber) {
    // Optional: Add call tracking here
    console.log(`Calling: ${phoneNumber}`);
    return true;
}

// Initialize tooltips or any other features
document.addEventListener('DOMContentLoaded', function() {
    console.log('Emergency Helpline Bangladesh loaded');
    
    // Check if URL has city parameter
    const urlParams = new URLSearchParams(window.location.search);
    const cityParam = urlParams.get('city');
    
    if (cityParam && emergencyDatabase[cityParam]) {
        document.getElementById('city').value = cityParam;
        loadEmergencyContacts();
    }
});

// Add keyboard shortcut for emergency (Ctrl+E to focus city selector)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        document.getElementById('city').focus();
    }
});

// Service Worker for offline capability (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
