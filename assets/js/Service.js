const districtsByCity = {
    "Ahmedabad": ["Sarkhej", "Navrangpura", "Maninagar"],
    "Surat": ["Kamrej", "Varachha", "Adajan"],
    "Bhavnagar": ["Chitra", "Kalanala", "Ghogha"]
};

function updateDistricts() {
    const city = document.getElementById("city").value;
    const districtSelect = document.getElementById("district");
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (city && districtsByCity[city]) {
        districtsByCity[city].forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function searchServices() {
    const city = document.getElementById("city").value;
    const district = document.getElementById("district").value;
    const serviceType = document.getElementById("service-type").value;
    const errorMessage = document.getElementById("error-message");
    const services = document.querySelectorAll(".service");

    if (!city || !district || !serviceType) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert(`Searching for ${serviceType} in ${district}, ${city}`);
        services.forEach(service => {
            if (service.getAttribute("data-service") === serviceType) {
                service.style.display = "block";
            } else {
                service.style.display = "none";
            }
        });
    }
}