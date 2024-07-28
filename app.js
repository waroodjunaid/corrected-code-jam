// 1.
function reverseArrayExtraArray(originalArray) {
    const reversedArray = [];
    for (let i = originalArray.length - 1; i >= 0; i--) {
        reversedArray.push(originalArray[i]);
    }
    return reversedArray;
}

const myArray = [1, 2, 3, 4, 5];
const reversedResult = reverseArrayExtraArray(myArray);
console.log("Reversed array:", reversedResult);

function reverseArrayInPlace(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex < rightIndex) {
        const temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}

const myArray2 = [1, 2, 3, 4, 5];
reverseArrayInPlace(myArray2);
console.log("Reversed array (in-place):", myArray2);




//2.
const arr = [2, 5, 5.5, 3, 6.8, 0, -5];
function filtrate(el) 
 {
     return (parseInt(el, 10) === el) && el > 0
    }
const filteredArray = arr.filter(filtrate)
console.log(filteredArray)



  
//4.
    function checkPalindrome(string) {
        const len = string.length;
        for (let i = 0; i < len / 2; i++) {
         if (string[i] !== string[len - 1 - i]) {
                return false }}
        return true}
    
    const inputString = prompt('Enter a Word below. (can/cannot be a palindrome) ')
    if (checkPalindrome(inputString)) {
        console.log('It is a palindrome.')} else {
        console.log('It is not a palindrome.')}

               
      //5.
        function check_numbers(x, y) {
            if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
                return true
            } else {
                return false }}
        
        console.log(check_numbers(12, 101))
        console.log(check_numbers(52, 80))
        console.log(check_numbers(15, 99))
        



//6.
let getMinNum = (arr, fn) => 
{return Math.min(     
    ...arr.map(typeof fn === 'function'
 ? fn : val => val[fn]))}
  const arrayOfObjects = [{ n: 43 }, { n: 65 }, { n:12 },
     { n: 96 }, {n: 87}, {n: 13}, {n: 40}]
  console.log(getMinNum(arrayOfObjects, o => o.n)) 



//7.
  function createUpdatedString(str) {
    if (str.length >= 3) {
        const lastThree = str.slice(-3)
        return lastThree.repeat(4)
    } else {
        return false}}

console.log(createUpdatedString("Python 3.0"))
console.log(createUpdatedString("JS"))
console.log(createUpdatedString("JavaScript"))





//8.
        let overallAngle = 120; 
        let angleType = classifyingAngle(overallAngle);

        function classifyingAngle(angle) {
    let userInput1 = prompt('Enter a value of an angle in terms of degree. ')
                     
            if (userInput1 > 0 && userInput1 < 90) 
        {alert ("Acute angle")}
                 else if (userInput1 === 90) {
    alert ("Right angle") }
         else if (userInput1 > 90 && userInput1 < 180) {
         alert ("Obtuse angle") } 
     else if (userInput1 === 180) {return "Straight angle"}
     else
      {alert ("Invalid angle. Please enter a value between 0 and 180 degrees.") }
 }
    
//9.
function nearestRoundNumber(num) {
    while (num % 10) {
 num++;} return num}

console.log(nearestRoundNumber(592))
   


//10.
   const items = ['a', 'b', 'c'];

for (const [index, item] of items.entries()) {
    console.log(`${index}: ${item}`);
}
     