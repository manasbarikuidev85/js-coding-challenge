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















