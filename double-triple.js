const first=1;
const second=true;
if(first===second){// strictly checking along with type and value of variable;
    // == convert all into one type by implicit conversion
    // if boolean and number then convert boolean to number by type casting;
    // try to avoid double equal to check equality. use triple equal;

    // object and array is checked against referene. for object and array is not checked the way we do;
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

const a={name: 'ali'};
const b={name:'ali'};

if(a==b){
    console.log('both are same');

}else{
    console.log('they are not same');
}