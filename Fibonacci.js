function Fib(n) {
    if (n <= 1) {
      return n;
    } else {
      return Fib(n - 1) + Fib(n - 2);
    }
  }
  
  function printFibonacci(number) {
    let i = 0;
    const fibonacciList = [];
    while (Fib(i) < number) {
      fibonacciList.push(Fib(i));
      i++;
    }
    return fibonacciList;
  }
  
  const userInput = prompt("Enter a number:");
  const number = parseInt(userInput);
  const result = printFibonacci(number);
  
  console.log(result.join(', '));
  