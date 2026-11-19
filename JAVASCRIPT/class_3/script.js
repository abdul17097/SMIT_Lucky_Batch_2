// Arthematic operators
/* 
+, -, /, *, %
*/

// Comparasion Operators
/*
> -> grater than
< -> less than
>= -> grater than or equal
<= -> less than or equal
!= -> not equal
== -> equal
=== -> equal (check data type)
*/

// Logical Operators

/*
&& -> and logical 
|| -> or logical
*/

// console.log(4 > 5); // false
// console.log(5 % 4); // 1

// console.log(10 == "10"); // true
// console.log(10 === "10"); // false

// let age = 20;
// let gender = "male";

// console.log(age >= 18 || gender == "female"); // true
// console.log(age >= 18 && gender == "female"); // false

// conditional statements
/* if(condition) {
    body
}else{
    body
    }
*/

// type corision/converter
// Number(data) -> string to number
// String(data) -> number to string

// let input = Number(prompt("Enter the number"));
// console.log(typeof input);

// if (input > 12) {
//   console.log("Condition success");
// } else {
//   console.log("Condition faild");
// }

let age = Number(prompt("Enter your age:"));
let nationality = prompt("Enter your Nationality:");

if (age >= 18 && nationality == "pakistani") {
  alert("You're eligible for ID Card");
} else {
  alert("You're not eligible for ID Card");
}
