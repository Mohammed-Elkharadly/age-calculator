// select the elements
const form = document.getElementById("calc-form");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year"); 

const dayResult = document.getElementById("dd");
const monthResult = document.getElementById("mm");
const yearResult = document.getElementById("yy");

let errorDay = document.querySelector(".error-day");
let errorMonth = document.querySelector(".error-month");
let errorYear = document.querySelector(".error-year");

const date = new Date();
let d = date.getDate();
let m = date.getMonth() + 1;
let y = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

form.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  errorDay.textContent = "";
  errorMonth.textContent = "";
  errorYear.textContent = "";

  const inputDay = parseInt(dayInput.value);
  const inputMonth = parseInt(monthInput.value);
  const inputYear = parseInt(yearInput.value);

  if (inputDay <= 0 || inputDay > 31) {
    errorDay.textContent = "Must be a valid date";
  }

  if (inputMonth <= 0 || inputMonth > 12) {
    errorMonth.textContent = "Must be a valid month";
  }

  if (inputYear >= y) {
    errorYear.textContent = "Must be in the past";
  }

  // If there are no errors, calculate the age
  if (
    !errorDay.textContent &&
    !errorMonth.textContent &&
    !errorYear.textContent
  ) {
    calculateAge(inputDay, inputMonth, inputYear);
  }
}

function calculateAge(day, month, year) {
  // Check if the input month is valid
  if (month < 1 || month > 12) {
    // Handle invalid month
    errorMonth.textContent = "Must be a valid month";
    return;
  }

  // Check if the input day is valid for the selected month
  const maxDaysInMonth = months[month - 1]; // Zero-based index

  if (day < 1 || day > maxDaysInMonth) {
    // Handle invalid day
    errorDay.textContent = "Must be a valid month";
    return;
  }

  // Calculate the age
  const ageYears = y - year;
  const ageMonths = m - month;
  const ageDays = d - day;

  // Update the results in the HTML elements
  yearResult.textContent = ageYears;
  monthResult.textContent = ageMonths;
  dayResult.textContent = ageDays;
}
