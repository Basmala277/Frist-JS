// 1- Print Entered Number

// let num = prompt("Enter a number:");
// console.log(num);

// ============================================================= //

// 2- Check Divisibility by 3 and 4 

// let num = prompt("Enter a number:");
// if (num % 3 === 0 && num % 4 === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// ============================================================= //

// Find Maximum of Two Numbers 

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// console.log(Math.max(num1, num2));
// Check if Number is Positive or Negative:

// let num = prompt("Enter a number:");
// if (num < 0) {
//   console.log("negative");
// } else {
//   console.log("positive");
// }

// ============================================================= //

// Find Max and Min of Three Numbers 

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let maxNum = Math.max(num1, num2, num3);
// let minNum = Math.min(num1, num2, num3);
// console.log("Max element =", maxNum);
// console.log("Min element =", minNum);

// ============================================================= //

// Check Even or Odd

// let num = prompt("Enter a number:");
// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// ============================================================= //

// Check if Character is Vowel or Consonant

// let char = prompt("Enter a character:").toLowerCase();
// if ("aeiou".includes(char)) {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }

// ============================================================= //

// Print All Numbers from 1 to User's Number

// let num = prompt("Enter a number:");
// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// ============================================================= //

// Print Multiplication Table

// let num = prompt("Enter a number:");
// for (let i = 1; i <= 12; i++) {
//   console.log(num * i);
// }

// ============================================================= //

// Print All Even Numbers Between 1 and User's Number

// let num = prompt("Enter a number:");
// for (let i = 2; i <= num; i += 2) {
//   console.log(i);
// }

// ============================================================= //

// Calculate Power of Two Numbers

// let base = prompt("Enter the base:");
// let exponent = prompt("Enter the exponent:");
// console.log(Math.pow(base, exponent));

// ============================================================= //

// Calculate Total, Average, and Percentage

// let marks = [];
// for (let i = 0; i < 5; i++) {
//   marks.push(parseInt(prompt("Enter marks for subject " + (i + 1) + ":")));
// }
// let total = marks.reduce((a, b) => a + b, 0);
// let average = total / 5;
// let percentage = (total / 500) * 100;
// console.log("Total marks =", total);
// console.log("Average marks =", average);
// console.log("Percentage =", percentage);

// ============================================================= //

// Find Number of Days in Month

// let month = prompt("Enter the month number:");
// let days;
// switch (parseInt(month)) {
//   case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//     days = 31;
//     break;
//   case 4: case 6: case 9: case 11:
//     days = 30;
//     break;
//   case 2:
//     days = 28; 
//     break;
//   default:
//     days = "Invalid month";
// }
// console.log("Days in month:", days);

// ============================================================= //

// Calculate Percentage and Grade

// let subjects = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer"];
// let marks = [];
// for (let i = 0; i < 5; i++) {
//   marks.push(parseInt(prompt("Enter marks for " + subjects[i] + ":")));
// }
// let total = marks.reduce((a, b) => a + b, 0);
// let percentage = (total / 500) * 100;
// let grade;
// if (percentage >= 90) grade = "A";
// else if (percentage >= 80) grade = "B";
// else if (percentage >= 70) grade = "C";
// else if (percentage >= 60) grade = "D";
// else if (percentage >= 40) grade = "E";
// else grade = "F";
// console.log("Percentage =", percentage + "%");
// console.log("Grade =", grade);

// ============================================================= //

// Total Days in a Month (Switch Case)

// let month = prompt("Enter the month number:");
// let days;
// switch (parseInt(month)) {
//   case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//     days = 31;
//     break;
//   case 4: case 6: case 9: case 11:
//     days = 30;
//     break;
//   case 2:
//     days = 28;
//     break;
//   default:
//     days = "Invalid month";
// }
// console.log("Days in month:", days);

// ============================================================= //

// Check Vowel or Consonant (Switch Case)

// let char = prompt("Enter a character:").toLowerCase();
// switch (char) {
//   case 'a':
//   case 'e':
//   case 'i':
//   case 'o':
//   case 'u':
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }

// ============================================================= //

// Find Maximum Between Two Numbers (Switch Case)

// let num1 = parseInt(prompt("Enter first number:"));
// let num2 = parseInt(prompt("Enter second number:"));
// switch (true) {
//   case num1 > num2:
//     console.log(num1);
//     break;
//   case num2 > num1:
//     console.log(num2);
//     break;
//   default:
//     console.log("Both are equal");
// }

// ============================================================= //

// Check Even or Odd (Switch Case)

// let num = parseInt(prompt("Enter a number:"));
// switch (num % 2) {
//   case 0:
//     console.log("even");
//     break;
//   default:
//     console.log("odd");
// }

// ============================================================= //

// Check Positive, Negative, or Zero (Switch Case)

// let num = parseInt(prompt("Enter a number:"));
// switch (true) {
//   case num > 0:
//     console.log("positive");
//     break;
//   case num < 0:
//     console.log("negative");
//     break;
//   default:
//     console.log("zero");
// }

// ============================================================= //

// Simple Calculator (Switch Case)

// let num1 = parseFloat(prompt("Enter first number:"));
// let num2 = parseFloat(prompt("Enter second number:"));
// let operator = prompt("Enter operator (+, -, *, /):");
// switch (operator) {
//   case '+':
//     console.log(num1 + num2);
//     break;
//   case '-':
//     console.log(num1 - num2);
//     break;
//   case '*':
//     console.log(num1 * num2);
//     break;
//   case '/':
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Invalid operator");
// }