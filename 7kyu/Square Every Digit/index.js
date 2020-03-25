/*
  Title:
    Square Every Digit
  Description:
    Welcome. In this kata, you are asked to square every digit of a number.
  Examples:
    For example, if we run 9119 through the function, 811181 will come out.
  Notes:
    The function accepts an integer and returns an integer
  Kata Link:
    https://www.codewars.com/kata/square-every-digit
*/
function squareDigits(num){
    let strNums = String(num);
    let squareDigits = "";
    
    for (let i = 0; i<strNums.length; i++){
      let makeSquare = parseInt(strNums[i]) * parseInt(strNums[i]);
      squareDigits += String(makeSquare);
    }
    return parseInt(squareDigits);
  }