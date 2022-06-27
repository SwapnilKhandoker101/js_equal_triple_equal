/*
falsy:
false
0 is falsy value;
empty string is falsy;
undefined;
not a number;NAN;



-----------------

truthy:
true
any number positive or negative is truthy
string is truthy;
any string including single whitespace,'0';
empty array is truthy;
empty object is also truthy;
anything else that is not falsy will be truthy






*/
// const x=false;
// const x=true;
// let x=null;
// let x=parseInt('hello');
let x=[];
console.log('value of x');
if(x){
    console.log('variable is truthy');
}else{
    console.log('variable is falsy');
}