//Description : Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


//Link : https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

//My Solution

    let murmur = "";
    
    //Is the number a positve number?
    if (num > 0) {
      
      //If so, print a message how many ever times until you get to the inputted #
      
      for (let i = 1; i <= num; i++) {
        
        murmur += i + " sheep...";
        
      }
  
      return murmur;
  
    } else{
      
      return "";
    }
