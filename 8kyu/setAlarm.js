/* Directions :

Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. 

Link : https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
*/

//My Solution

const setAlarm = (employed, vacation) => {
  if (employed && !vacation) {
    return true;
  }
  return false;
};
