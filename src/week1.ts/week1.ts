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

//print patterns
