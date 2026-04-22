const PI = 3.14; //Cannot change
let radius = 3;

let area = radius*radius*PI;

console.log(area);

radius = 20;
area = radius*radius*PI;

console.log(area);

//type coersion
const one = 1;
const two = '2';

//multiplying assumes result has an int value
let result = one * two;
console.log(result);

//adding assumes result has a string value
result = one + two;
console.log(result);

//We can type cast/convert/coerce it for adding
result = one + Number(two);
console.log(result);



let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
//In order to use student outside of the block, you must instantiate it outside of the block                      