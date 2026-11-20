// switch statements
/*





*/

let fruit = "orange";

switch (fruit) {
  case "banana":
    console.log(`Banana prices $0.99`);
    break;
  case "orange":
    console.log(`Orange prices $1.99`);
    break;
  case "Mango":
    console.log(`Mango prices $3.99`);
    break;
  case "Grapes":
    console.log(`Grapes prices $2.99`);
    break;
  default:
    console.log("Out of Stock");
}

// Ternary Operator
let theme = "light";

let result = theme == "dark" ? "bg-blue" : "bg-white";
alert(result);
