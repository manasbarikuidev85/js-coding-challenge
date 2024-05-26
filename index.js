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

let a ="manas";
let b ="bari";
if(a.length === b.length){
    if(a===b){
        console.log("is Equal")
    }else{
        console.log("not Equal")
    }
    
}else{
    console.log("Length is something differnet")
















