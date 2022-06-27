/*
data types:
primitive data types
1) number
2)string
3)boolean
4)undefined
5)null

7)symbol

non-primitive:
6) object
*/
// primitive data types are immutable
let a='hello';
let b=a;
console.log(a,b);
a='gello';
console.log(a,b);

const x={ job:'web developer'};
const y=x;
console.log(x,y);
x.job='font-end developer';
console.log(x,y);// here after setting x , y also changes;even if i change y it will change x. because non primitive have references thus if one changes with that reference then all variable in that reference changes.

