//question 1
var array = [1,2,3];
array.push(4);
console.log("question 1:",array);

//question 2
var arrays = [2,3,4];
arrays.pop();
console.log("question 2:",arrays);

//question 3
var arr = [1,"Manasa",2,"Sai"];
arr.unshift(4);
console.log("question 3:",arr);

//question 4
var first = [1,2,"siri"];
first.shift();
console.log("question 4:",first);

//question 5
let reverse = ["Sai","hello world",21,28,89,24,12];
reverse.reverse();
console.log("question 5:",reverse);

//question 6
let index = ["hello","world",1,2,"developer"];
let indexof = index.indexOf(1);
console.log("question 6:",indexof);

//question 7
let value = [1,2,3,4];
let exists = array.includes(1);
console.log("question 7:",exists);

//question 8
let element = [24,12,9,8,6,3,7,10];
element.sort((a, b)=> a-b);
console.log("question 8:",element);

//question 9
let commas = [1,2,3,4,5];
let separators = commas.join(",");
console.log("question 9:",separators);

//question 10
let a = [1, 2, 3];
a.push(4); 
a.shift(); 
console.log("question 10:",a); 

//question 11
let ar = [1, 2, 3];
let res = ar.reverse().join(','); 
console.log("question 11:",res); 

//question 12
let arra = [24, 12, 2,7,5,9];
arra.sort((a, b) => a - b); 
arra.pop(); 
console.log("question 12:",arra); 

//question 13
let add = [1,2,3];
add.unshift(0,1);
add.shift();
let len = add.length;
console.log("question 13:",len);

//question 14
let array1 = [3, 5, 2];
let array2 = [6, 1, 4];
let combinedArray = array1.concat(array2); 
combinedArray.sort((a, b) => a - b); 
combinedArray.pop(); 
console.log("question 14:",combinedArray); 