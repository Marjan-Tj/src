
// task 1 : power ----------------------------------------
function pow(x,power) {
  let result = 1

  for (let i = 1; i <= power; i++) {
      result *= x;
  }
    alert(x + " to the power of " + power +" is : " + result);
}

let x = Number(prompt("please enter base number"));
let power = Number(prompt("please enter power"));

pow(x, power);


// task 2 : min number ----------------------------------------
// function min(a, b) {
//   if (a < b) {
//     alert("minimum " + a + " and " + b + " is : " + a)
//   } else {
//     alert("minimum " + a + " and " + b + " is : " + b)
//   }
// }

// let x = Number(prompt("please enter first number"));
// let y = Number(prompt("please enter second number"));

// min(x, y);


// task3 : one-line condition : ternary ----------------------------------------
// function age(x) {
//     return ((x > 18) ? true : confirm('Did parents allow you?'));
// }

// let x = Number(prompt("please enter your age"));

// age(x);

// task 4 : one-line condition : OR operator ----------------------------------------
// function age() {
//     return ((x > 18) || confirm('Did parents allow you?'));
// }

// let x = Number(prompt("please enter your age"));

// age(x);
