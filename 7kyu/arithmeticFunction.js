/* Directions :

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

Try to do it without using if statements!

Link : https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
*/

//My Solution

const arithmetic = (a, b, operator) =>{

    let result;
    
    switch(operator){
        case "add":
        result = a + b;
        break;
        
        case "subtract":
        result = a - b;
        break;
        
        case "multiply":
        result = a * b;
        break;
        
        case "divide":
        result = a / b;
        break;}
    
    return result;
    
    
}