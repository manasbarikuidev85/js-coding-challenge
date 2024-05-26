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










