function createPattern(luckyNumber) {
    for (let i = 1; i <= luckyNumber; i++) {
      let output = '';
      
      for (let j = 1; j <= i; j++) {
        output += j * 2 - 1 + ' ';
      }
  
      for (let j = 1; j < i; j++) {
        output += String.fromCharCode(64 + j) + ' ';
      }
      
      console.log(output.trim());
    }
    
    for (let i = luckyNumber - 1; i >= 1; i--) {
      let output = '';
  
      for (let j = 1; j <= i; j++) {
        output += j * 2 - 1 + ' ';
      }
  
      for (let j = 1; j < i; j++) {
        output += String.fromCharCode(64 + j) + ' ';
      }
  
      console.log(output.trim());
    }
  }
  
  const userInput = parseInt(alert("Please enter your lucky number:"));
  createPattern(userInput);
  