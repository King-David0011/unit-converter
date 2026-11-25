const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");

const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");


convertBtn.addEventListener("click", function() {

    const number = Number(numberInput.value);

    // Check if the user entered a number
    if (numberInput.value === "") {
        alert("Please enter a number");
        return;
    }


    // Length Conversion
    const metersToFeet = (number * 3.281).toFixed(3);
    const feetToMeters = (number / 3.281).toFixed(3);

    lengthResult.textContent =
        `${number} meters = ${metersToFeet} feet | ${number} feet = ${feetToMeters} meters`;


    // Volume Conversion
    const litersToGallons = (number * 0.264).toFixed(3);
    const gallonsToLiters = (number / 0.264).toFixed(3);

    volumeResult.textContent =
        `${number} liters = ${litersToGallons} gallons | ${number} gallons = ${gallonsToLiters} liters`;


    // Mass Conversion
    const kilosToPounds = (number * 2.204).toFixed(3);
    const poundsToKilos = (number / 2.204).toFixed(3);

    massResult.textContent =
        `${number} kilos = ${kilosToPounds} pounds | ${number} pounds = ${poundsToKilos} kilos`;

});