//sum program
function sumall(start: number, end: number): number {
  let sum: number = 0;
  for (let index = start; index <= end; index++) {
    sum = sum + index;
  }
  return sum;
}

const start: number = 1,
  end: number = 100;
let res: number = sumall(start, end);
console.log(res);
//function inside function concept

// Function to perform addition
function sum(a: number, b: number): number {
  return a + b;
}

// Function to perform subtraction
function sub(a: number, b: number): number {
  return a - b;
}

// Function to perform multiplication
function multi(a: number, b: number): number {
  let res = a * b;
  return res;
}

// Function to perform division
function divide(a: number, b: number): number {
  let res = a / b;
  return res;
}

// Function that takes two numbers and an arithmetic function
function airthmetic(a: number, b: number, airthmetica: any): number {
  return airthmetica(a, b); // Call the arithmetic function and return its result
}

let result = airthmetic(12, 12, sum);
console.log(result); // Output: 144 (12 * 12)

//star patterns
// *
// **
// ***

function pattern1(rows: number): void {
  for (let i = 0; i < rows; i++) {
    let stringptrn = "";
    for (let j = 0; j < i + 1; j++) {
      stringptrn = stringptrn + "*";
    }
    console.log(stringptrn);
  }
}

pattern1(5);
console.log("\n");
//pattern 2
// **
// ****
// ******
function pattern2(rows: number): void {
  for (let i = 0; i < rows; i++) {
    let stringptrn = "";
    for (let j = 0; j < i + 1; j++) {
      stringptrn = stringptrn + "**";
    }
    console.log(stringptrn);
  }
}
pattern2(4);
