//hollow square
// *****
// *   *
// *   *
// *   *
// *****

//1.print full row 2.print empty stars

function printfullrow(n: number): void {
  let str = "";
  for (let index = 0; index < n; index++) {
    str = str + "*";
  }
  console.log(str);
}

function printhalf(n: number): void {
  let str = "*";
  for (let index = 0; index < n - 2; index++) {
    str = str + " ";
  }
  str = str + "*";
  console.log(str);
}

function printWhole(n: number): void {
  printfullrow(n);
  for (let index = 0; index < n - 2; index++) {
    printhalf(n);
  }
  printfullrow(n);
}

printWhole(5);
