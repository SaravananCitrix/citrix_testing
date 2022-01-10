const first = parseFloat( prompt("enter fiest number=>"));

const sec = parseFloat( prompt("enter second number=>"));

const operator = prompt("enter operation (+,-,*,/)=>");

let total;
if (operator == "+") 
  total=first+sec; 
else if (operator == "-")  
  total=first-sec; 
else if (operator == "*") 
  total=first*sec; 
else (operator == "/") 
  total=first/sec; 
window.alert("result is=" +result);