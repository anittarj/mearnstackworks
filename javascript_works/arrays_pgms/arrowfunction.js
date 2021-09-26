// // anonymous function -> nameless function
var add = (num1, num2) => num1 + num2;

var square = (num1) => num1 ** 2;

var div = (num1, num2) => num1 / num2;

var cube = (num1) => num1 ** 3; //will return the value aftr the value after arrow unless a return statement is specified

var isStartWithA = (name) => name[0] == "a" || name[0] == "A" ? true : false

var isOdd = (num) => num % 2 == 0 ? false : true;

var isEven = (num) => num % 2 == 0 ? true : false;

var sub = (num1, num2) => num1 > num2 ? num1 - num2 : num2 - num1

var largestAmongTwo = (num1, num2) => num1 > num2 ? num1 : num2;