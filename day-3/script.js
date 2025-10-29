// task 1
let number = 5;
const kindOfNumber = (number % 2) ? 'odd' : 'even';
console.log(`The number ${number} is ${kindOfNumber}.`);

//task 2
let age = 20;
const d_license = (age >= 18) ? 'eligible' : 'not eligible';
console.log(`A person who is ${age} years old is ${d_license} for a driving license.`);

/* const driving_license = (age >= 18 && 'eligible') || 'not eligible';
console.log(`A person who is ${age} years old is ${driving_license} for a driving license.`); */

//task 3
let salary = 12300;
let salari_with_bonus = salary + (salary * 0.2);
console.log(`The salary after 20% bonus is: ${salari_with_bonus}`);

//task 4
let color = "green";
const traffic_light = (color === "red" && "STOP! The light is red.") ||
  (color === "green" && "GO! The light is green.")
console.log(traffic_light);


//task 5
let units = 5;
const monthly_payment = units * 150 * 30;
const annual_payment = (monthly_payment * 12);
const discount = annual_payment * 0.2;
const total_annual_payment = annual_payment - discount;
console.log(`The total annual payment after 20% discount is: ${total_annual_payment}`);

//task 6
/*
📘 Leap Year Rules

In the Gregorian calendar, a year is considered a leap year if it meets the following conditions:

✅ 1️⃣ If the year is divisible by 4 → it might be a leap year

But it’s not automatically a leap year yet.
We need to check the next conditions.

🚫 2️⃣ If the year is also divisible by 100 → it is not a leap year

Example:
The year 1900 is divisible by 100 → ❌ not a leap year.

✅ 3️⃣ Unless the year is also divisible by 400 → then it is a leap year

Example:
The year 2000 is divisible by 400 → ✅ leap year.
*/