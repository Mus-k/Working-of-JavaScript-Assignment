// 1 question
console.log(addNum(5, 10)); // Calling the function before it is declared
function addNum(a, b) {
  return a + b;
}

// 2 questions 
console.log(multiplyNumbers(3, 4));
 // Call the function after it is declared
const multiplyNumbers = function(a, b) {
    return a * b;
  }


//   question 3
function addNumbers(a, b) {
    console.log(num); // Output: undefined (hoisted but not assigned yet)
    var num = a + b;
    console.log(num); // Output: sum of a and b
    return num;
  }
  addNumbers(30, 10);
  
//   question 4

   // console.log(num1); // Output: ReferenceError: num1 is not defined can not access num1 before initilization
    console.log(num2); // Output: undefined 
    console.log(num3); // Output: undefined 
  
    let num1 = 50;
    var num2 = 60;
    const num3 = 70;
  
    console.log(num1); // Output: 10
    console.log(num2); // Output: 20
    console.log(num3); // Output: 30
  

//   5th question
    console.log(number); // Output: ReferenceError: Cannot access 'num' before initialization (temporal dead zone)
    let number = 10;
    console.log(number); // Output: 10
  
  
  
