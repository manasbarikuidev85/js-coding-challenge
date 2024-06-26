//Q- How to conver string to object in using javascrit ?

let inputString ="my name is manas kumar barik";
let obj ={};

function strToObj(data){
    for(let i =0; i < data.length; i++){
        obj[data[i]] = data[i].length;
    }
    return obj;

}
let result = strToObj(inputString.split(" "));
console.log(result);

//Q- How to reverse a string using javascripts 
function reverseString(str){
let reversed ="";
for(let i =str.length-1; i<=0 ; i--){
reversed = reversed +str[i];
}
return reversed;
}
let orinalString ="bangalore";
const result =reverseString(orinalString);
console.log(result);

//Q-How to compaire two string using javascripts ?

let empName1 ="manas";
let empName2 ="kumar";

if(empName1.length === empName2.length){
    if(empName1.toLowerCase() === empName2.toLowerCase()){
        console.log("String is Equal")
    }else{
        console.log("String are not Equal")
    }
}else{
    console.log("Length is something different")
}

//Q -How to reverse a number or string number ?
//12345 to 54321

let num =8309780601;
let str =num.toString();
let reverseString ="";
for(let i=str.length-1; i>=0; i--){
    reverseString = reverseString +str[i];
}
console.log(reverseString);

let num ="12345678";
let reverseString ="";
for(let i=num.length-1; i>=0; i--){
    reverseString = reverseString +num[i]; 
}
console.log(reverseString);

//Q-How to sum an Array ?
let araayNumber =[10,20,30,40,50];
function sum(arr){
return arr.reduce((acc, crrV)=>{
    return acc +crrV;
},0)
}
let result =sum(araayNumber);
console.log(result);

//Q-How to find minimum and maximum value in given array ?

let array =[1,2,3,4,5,6,7,8];
function findMaximumValue(arr){
return arr.reduce((acc, currV)=>{
 return acc < currV ? acc:currV;
})
}
let maximumValue =findMaximumValue(array);
console.log(maximumValue);

//Q- Coding Example null and undefined in js 

let var1;
console.log(var1);     //undefined
console.log(typeof var1); //undefined

let var2 =null;
console.log(var2); //null value
console.log(typeof var2);//object

//Q-Closure coding example ?
function privateCounter() {
    let count = 0;
    return {
        increment(value = 1) {
            count = count + value;
        },
        getvalue() {
            return count;
        }
    };
}

let counter = privateCounter();
console.log(counter.getvalue()); // 0
counter.increment();
console.log(counter.getvalue()); // 1

Q- Another Example of Closure ?

const privateSecret=()=>{
    const secret ="foo";
return =()=>secret;
};
const getSecret =privateSecret();
console.log(getSecret()); //foo

//Q-what is currying function ?
const multiply =(num1)=>{
	return(num2)=>{
		return num1 * num2;
}
}
console.log(multiply(2)(3)); //6

//Q-write a code for an Array which conatain only binary number(either 1 or 0) move to all the zero at the end , 
//do not use sort or filter methods , Here is the below code ?
//output =[1,1,1,0,0,0];
//given Array =[1,0,0,0,1,0,1];

let inputArray =[1,0,0,0,1,0,1];
function zeroMoveToEnd(arr){
    let index = 0;
    for(let i= 0; i< arr.length; i++){
        if(arr[i]===1){
            arr[index] =1;
            index++;
        }
        
    }
    while(index < arr.length){
        arr[index]=0;
        index++;
    }
    return arr;
}
zeroMoveToEnd(inputArray)
console.log(inputArray);

//Q-write aprograme to reverse a string in sentence wyas using javascripts ?

let stringWord ="This my country";
let newArray = stringWord.split(" ");
let array = [];
//using map() methos 
newArray.map((item,i)=>{
    let newString =[];
    for(let i =item.length-1; i >=0; i--){
        newString = newString +item[i];
    }
    array.push(newString);
})
console.log(array.toString().replaceAll(',',' '));

//Q-Write a function that prints numbers from 1 to 100. For multiples of 3, 
//print "Fizz" instead of the number, and for multiples of 5, print "Buzz". 
//For numbers which are multiples of both 3 and 5, print "FizzBuzz"?

function fizzBuzz(){
    for(let i=1; i<=100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzBuzz")
        }else if(i % 3 === 0){
            console.log("fizz")
        }else if(i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz()

//Q-Removed duplicate in given array ?

let array =[1,1,2,2,3,4,4,5,6,7,8];

function removedDuplicate(arr){
    return arr.filter((ele,index,arr)=>{
        return arr.indexOf(ele)===index;
    })
}

let duplecateValue =removedDuplicate(array);
console.log(duplecateValue);

//Q-short cut ways for removed duplicate in given array 
function removeDuplicate(arr){
    return ([...new Set(arr)]);
}
console.log(removeDuplicate(array));

//Q-How to flatten an nested Array ?

let flattenArray =[1, [2, [3, [4]], 5]];
function flattenNestedArray(arr){
return arr.flat(Infinity);
}
console.log(flattenNestedArray(flattenArray));

//Q-write a function to find out first non-repeating char in a string ?
let string ="bangalore"
function firstNonRepeteingChar(str){
for(let i=0; i<str.length; i++){
if(str.indexOf(str[i])=== str.lastIndexOf(str[i])){
return str[i]
}
}
return null;
}
console.log(firstNonRepeteingChar(string));

//Q-Write a function to count the number of occurrences of each character in a string.
let string ="bangalore"
function countCharater(str){
	let charCount ={};
for(let char of str){
	charCount[char] = charCount[char] +1 || 1 ;
}
return charCount;
}
let charaterCount =countCharater(string);
console.log(charaterCount);

//Q- write a function to sum of an array ?
let array =[10,20,30,40];
function sumOfArray(arr){
return arr.reduce((acc, currv)=>{
	return acc+currv;
},0)
}
let sumArray =sumOfArray(array);
console.log(sumArray); //100

//Q-Write a function to check if two strings are anagrams of each other.
function areAnagram(str1, str2){
let sortedString1 =str1.split("").sort().join("");
let sortedString2 =str2.split("").sort().join("");
return sortedString1 === sortedString2
}
console.log(areAnagram("listen", "silent"));
console.log(areAnagram("hello","world"));

//Q-How to flatten Array using js logic ?

function flattenArray(arr){
    let result =[];
    function flatten(element){
        if(Array.isArray(element)){
            for(let i=0; i< element.length; i++){
                flatten[i];
            }
        }else{
            result.push(element)
        }
    }
    flatten(arr)
    return result;
}
const input =[1,2[3,4[5,null,6[7,{}[8]]]]];
const flttend =flattenArray(input)
console.log(flttend)

//Q-What is recursive function given an example ?

function factorial(n) {
    // Base case: if n is 0 or 1, the factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(3)); // Output: 6


//Q-Simple closure example in js ?
function createCounter(){
    let count =0;
    return function (){
        count ++;
        return count;
    }
}

const counter1 =createCounter();
const counter2 =createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());

//Q- Write a function to find out maxMimum repeted array and return a result maxmuim repeted value ?
function findMode(arr){
    let counts ={};
    let maxNum =0;
    let mode;
    
    for(let elements of arr){
    counts[elements] =(counts[elements] || 0)+1;
    if(counts[elements] > maxNum){
        maxNum = counts[elements];
        mode =elements;
    }
}
console.log(counts)
return mode;
}
console.log(findMode([1,2,2,3,4,2,4,5,6,3,6,7,8,9,5,6,7]));




