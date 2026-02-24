const form = document.getElementById("solar-proposal-form");
const nameInput = document.getElementById("lead-name");
const regionSelect = document.getElementById("region");
const powerInput = document.getElementById("power-kw");

const nameError = document.getElementById("name-error");
const regionError = document.getElementById("region-error");
const powerError = document.getElementById("power-error");
const successMsg = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    successMsg.textContent = ""; 

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if (regionSelect.value === "") {
        regionError.textContent = "Please select a valid region.";
        isValid = false;
    } else {
        regionError.textContent = "";
    }

    if (powerInput.value <= 0 || powerInput.value === "") {
        powerError.textContent = "Power need must be greater than 0 kW.";
        isValid = false;
    } else {
        powerError.textContent = "";
    }

    if (isValid === true) {
        successMsg.textContent = `Proposal for ${powerInput.value}kW in the ${regionSelect.value} zone submitted successfully!`;
        form.reset(); 
    }
});