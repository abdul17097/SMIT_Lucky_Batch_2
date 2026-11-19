// conditional statements

/*
if(condition){
    body
}else if(condition){
    body
}else if(condition){
    body
}else{
    body
    }
*/

let marks = Number(prompt("Enter your marks"));

// if (marks >= 0 && marks <= 100) {
//   console.log("wait");
// } else {
//   console.log("Please Enter mark b/w 0 & 100");
// }

if (marks >= 90) {
  alert("A+");
} else if (marks < 90 && marks >= 80) {
  alert("A");
} else if (marks < 80 && marks >= 70) {
  alert("B+");
} else if (marks < 70 && marks >= 60) {
  alert("B");
} else if (marks < 60 && marks >= 50) {
  alert("C");
} else {
  alert("Failed");
}
