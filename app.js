// Declare and initialize an empty multidimensional array. (Array of arrays)
var multidimensional = [[]];


// Declare and initialize a multidimensional array representing the following matrix:
// 0 1 2 3 
// 1 0 1 2 
// 2 1 0 1
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
document.write(matrix[0] + "<br>" + matrix[1] + "<br>" + matrix[2] + "<br>");


//   Write a program to print numeric counting from 1 to 10.
for (var i = 0; i < 1; i++) {
  document.write(1 + "<br>" + 2 + "<br>" + 3 + "<br>" + 4 + "<br>" + 5 + "<br>" + 6 + "<br>" + 7 + "<br>" + 8 + "<br>" + 9 + "<br>" + 10 + "<br>");
}


// Write a program to print multiplication table of any number using for loop. Table number & length should be
// taken as an input from user.

var num = prompt("Enter a number to show its multiplication table");
var num = parseInt(num);

var length = prompt("How many times do you want the number to be multiplied?");
var length = parseInt(length);

for (var i = 0; i < length; i++) {
  var product = num * (i + 1);
  document.write(num + " x " + (i + 1) + " = " + product + "<br>");
}


//   Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var index = [0, 1, 2, 3, 4]
for (let i = 0; i < fruits.length; i++) {
  document.write("Element at index " + "is " + fruits[i] + "<br>");
}


// Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a.
document.write("<h2>Counting</h2>");
for (var i = 1; i <= 15; i++) {
  document.write(i + ",");
}
document.write("<br>");
// b.
document.write("<h2>Reverse Counting</h2>");
for (var i = 15; i >= 1; i--) {
  document.write(i + ",");
}
document.write("<br>");
// c.
document.write("<h2>Even</h2>");
for (var i = 0; i < 20; i += 2) {
  document.write(i + ",");
}
document.write("<br>");
// d.
document.write("<h2>Odd</h2>");
for (var i = 1; i < 20; i += 2) {
  document.write(i + ",");
}
document.write("<br>");
// e . 
document.write("<h2>Series</h2>");
for (let i = 2; i < 21; i += 2) {
  document.write(i + "k" + ",");
}
document.write("<br>");
document.write("<br>");



// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to our Bakery!What do you want Sir/Madam? ");

var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    index=i
    break;
  }
}

if (found) {
  alert(userInput+" is available at index "+index+" in our bakery");
} else {
  alert("We are sorry! "+userInput+" is not available in our bakery");
}


// Write a program to identify the largest number in the given array.
//  A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
var max = A[0];
document.write("Array Items:"+A);
document.write("<br>");
for (var i = 0; i < A.length; i++) {
  if (A[i] > max) 
  max = A[i];
}
document.write("The largest number is:"+max);
document.write("<br>");


// Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
var A = [24, 53, 78, 91, 12];
var min = A[0];
document.write("Array Items:"+A);
document.write("<br>");
for (var i = 0; i < A.length; i++) {
  if (A[i] < min)
  min = A[i];
}
document.write("The smallest number is:"+min);
document.write("<br>");


// Write a program to print multiples of 5 ranging 1 to 100.
for (var i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    document.write(i +",");
}
}
