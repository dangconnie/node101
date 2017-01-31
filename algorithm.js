
// More info: http://stackoverflow.com/questions/3629817/getting-a-union-of-two-arrays-in-javascript

// Write a JavaScript program to compute the union of two arrays.

// Before:
// console.log(union([1, 2, 3], [100, 2, 1, 10]));

// After:
// [1, 2, 3, 10, 100]

// =================================================================

var array1 = [1, 2, 3];
var array2 = [100, 2, 1, 10];

//Put the arrays together and bubble sort through it to numerically order items
//Sort method works for numerical and alphabetical order
var newArray = array1.concat(array2);
// console.log(newArray);

//From w3schools: When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value. So when comparing 1 and 100, we have a negative number from 1-100. This puts 1 before 100 as a result. If a-b is positive, move it up. If a-b is negative, keep it there.
newArray.sort(function(a,b){return a-b});
console.log(newArray);


