document.addEventListener("DOMContentLoaded", function () {
    const navIcon = document.querySelector(".nav-icon");
    const navLinks = document.getElementById("navLinks");

    navIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.hover-button');
    const galleryText = document.getElementById('service-details');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const serviceName = this.textContent;
            let serviceDetails = '';

            if (serviceName === 'Carpentry') {
                serviceDetails = `
                    <h1>Carpentry Services</h1>
                    <h2>Main Services</h2>
                    <ul>
                        <li>Custom Furniture - $200+</li>
                        <li>Home Repairs - $150+</li>
                    </ul>
                    <h2>Additional Services</h2>
                    <ul>
                        <li>Deck Construction - $300+</li>
                        <li>Cabinet Installation - $250+</li>
                    </ul>
                `;
            } else if (serviceName === 'Boat repairs') {
                serviceDetails = `
                    <h1>Boat Repairs</h1>
                    <h2>Main Services</h2>
                    <ul>
                        <li>Hull Repairs - $300+</li>
                        <li>Engine Maintenance - $250+</li>
                    </ul>
                    <h2>Additional Services</h2>
                    <ul>
                        <li>Electrical Systems - $200+</li>
                        <li>Painting and Refinishing - $150+</li>
                    </ul>
                `;
            } else if (serviceName === 'Electrical') {
                serviceDetails = `
                    <h1>Electrical Services</h1>
                    <h2>Main Services</h2>
                    <ul>
                        <li>Wiring and Rewiring - $150+</li>
                        <li>Light Fixture Installation - $100+</li>
                    </ul>
                    <h2>Additional Services</h2>
                    <ul>
                        <li>Outlet Repair - $75+</li>
                        <li>Panel Upgrades - $200+</li>
                    </ul>
                `;
            } else if (serviceName === 'Car Repair') {
                serviceDetails = `
                    <h1>Car Repair Services</h1>
                    <h2>Main Services</h2>
                    <ul>
                        <li>Oil Change - $40+</li>
                        <li>Brake Inspection - $60+</li>
                    </ul>
                    <h2>Additional Services</h2>
                    <ul>
                        <li>Tire Rotation - $20+</li>
                        <li>Engine Diagnostics - $80+</li>
                    </ul>
                `;
            }

            galleryText.innerHTML = serviceDetails;
        });
    });
});