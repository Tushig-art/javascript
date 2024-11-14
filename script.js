// var sides = prompt("gurvaljnii taliig oruul:").split(" ").map(Number);
// var perimeter = sides.reduce(function(a, b) { return a + b; }, 0);
// console.log(perimeter);

//1

var a = 12
var b = 23

console.log(a+b)

//2

var input = 5;
var output1 = Math.pow(input, 3); 
var output2 = input * 30;         

console.log(output1, output2);

//3

var a = 6;
var b = 4;

var output1 = a * b;    
var output2 = (a + b) * 2; 

console.log(output1, output2);

//4

var x = 1;
var y = 3 * x - 5;

console.log(y);

//5

var x = -2;
var y = 4 * Math.pow(x, 2) - 3 * x + 5;

console.log(y);

//6

var num = 476;
var last_D = num % 10;

console.log(last_D);

//7

var num = 423;
var digit = Math.floor((num / 10) % 10);

console.log(digit);

//8

var num = 27;
var onesDigit = num % 10;    
var tensDigit = Math.floor(num / 10); 

var product = onesDigit * tensDigit;

console.log(product);

//9
var num = 123;
var sum = Math.floor(num / 100) + Math.floor((num / 10) % 10) + (num % 10);

console.log(sum);

//10
var seconds = 200;
var minutes = Math.floor(seconds / 60);
var remainingSeconds = seconds % 60;

console.log(minutes, remainingSeconds);

//11
var seconds = 3612;
var hours = Math.floor(seconds / 3600);
var minutes = Math.floor((seconds % 3600) / 60);
var remainingSeconds = seconds % 60;

console.log(hours, minutes, remainingSeconds);

//12
var minutes = 3;
var seconds = 4;
var totalSeconds = (minutes * 60) + seconds;

console.log(totalSeconds);

//13
var input = "1 2 3"; 
var timeArray = input.split(" "); 
var hours = parseInt(timeArray[0]);
var minutes = parseInt(timeArray[1]);
var seconds = parseInt(timeArray[2]);

var totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

console.log(totalSeconds);

//14
var input = "2 5";  
var timeArray = input.split(" "); 
var days = parseInt(timeArray[0]);
var hours = parseInt(timeArray[1]);

var totalHours = (days * 24) + hours;

console.log(totalHours);

//15
var months = 27;
var years = Math.floor(months / 12);
var remainingMonths = months % 12;

console.log(years, remainingMonths);

//16
var input = "2 7";  
var timeArray = input.split(" "); 
var years = parseInt(timeArray[0]);
var months = parseInt(timeArray[1]);

var totalMonths = (years * 12) + months;

console.log(totalMonths);

//17
var input = "2 7";  
var timeArray = input.split(" "); 
var years = parseInt(timeArray[0]);
var months = parseInt(timeArray[1]);

var totalMonths = (years * 12) + months;

console.log(totalMonths);

//18
var input = "16 14";  
var timeArray = input.split(" "); 
var num1 = parseInt(timeArray[0]);
var num2 = parseInt(timeArray[1]);

var largerNumber = Math.max(num1, num2);

console.log(largerNumber);

//19
var input = "9 6";  
var timeArray = input.split(" "); 
var num1 = parseInt(timeArray[0]);
var num2 = parseInt(timeArray[1]);

var smallerNumber = Math.min(num1, num2);

console.log(smallerNumber);

//20
var input = "1 3 2";  
var timeArray = input.split(" ");
var num1 = parseInt(timeArray[0]);
var num2 = parseInt(timeArray[1]);
var num3 = parseInt(timeArray[2]);

var largestNumber = Math.max(num1, num2, num3);

console.log(largestNumber);

//21
var input = "3 2 1 4";  
var timeArray = input.split(" "); 
var numbers = timeArray.map(Number);  

var smallestNumber = Math.min(...numbers);

console.log(smallestNumber);


//22
var input = "85 75 96 69";  
var timeArray = input.split(" "); 
var numbers = timeArray.map(Number);  

var sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);

//23
var input = "3 6 2 4";  
var timeArray = input.split(" "); 
var numbers = timeArray.map(Number);  

var product = numbers.reduce((acc, num) => acc * num, 1);

console.log(product);
