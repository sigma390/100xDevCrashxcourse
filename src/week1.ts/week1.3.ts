function dothis(n: number): void {
  for (let index = 0; index < n; index++) {
    console.log("HIII");
  }
}
function waitOver(): void {
  console.log("Its been 5 seconds");
}
dothis(100);
setTimeout(waitOver, 5 * 1000);
