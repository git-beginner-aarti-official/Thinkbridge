////Variables

let a= 10;
console.log(a);
a=20;
console.log(a)


const b = 10;
console.log(b)
// b=20;
// console.log(b) //TypeError: Assignment to constant variable.

var c= 10;
console.log(c)

c=20;
console.log(c)

console.log(typeof 100)

//swap the variables
let var1 = 10;
let var2 = 20;
[var1 , var2] =[var2,var1];
console.log(var1, var2)


////Artihmetic Operators:

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);


////logical operators

console.log(a&&b)
console.log(a||b);
console.log(!a)

////assignment operator
a=b;
console.log(a)
console.log(b)

a+= b;
console.log(a)
console.log(b)

a-=b
console.log(a)
console.log(b)

a*=b;
console.log(a)
console.log(b);

a/=b;
console.log(a)
console.log(b)


//comparision operator;

console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a>=b);
console.log(a<=b)


////conditional statements:

if(a>b){
    console.log("a is greater than b ")
}
else{
    console.log("b is greater than a");
}

if(a>b){
console.log("a is greater than b")
}
else if(a == b){
    console.log("a and b are equal");
}
else{
    console.log("b is greater than a")
}

// //switch

switch (a){
    case 50:
        console.log("Value of a is 50");
        break;
    
    case 40:
        console.log("value of a is 40");
        break
    
    case 30:
        console.log("value of a is 30")
        break
    
    default:
        console.log("No value found")
}


////loops

for(let i=1;i<=5;i++)
{
    console.log(i)
}

while(a != 52)
{
    console.log(a);
    a++;
}
a=50

do{
    console.log(a);
    a++
}while(a!=55)



////arrays:

let arr = [1,2,3,4,5];
let arr2 = new Array();
arr2[0] = 10;
arr2[1] = 20;
arr2[2] = 30;

console.log(arr)
console.log(arr2)

//accessing elements usinig for
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

// acessing Element using for of
for(let i of arr)
{
    console.log(i)
}

console.log(arr.length);
console.log(arr.at(0));
console.log(arr.pop())
console.log(arr.shift())
console.log(arr.push(40))
console.log(arr.unshift(100));

let newArr = arr.concat(arr2);
console.log(newArr)

let arr3 = [[1,2],[2,3],[3,4],[4,5]];

let flatArr = arr3.flat()
console.log(flatArr)

let slicedArr = flatArr.splice(0,4);
console.log(slicedArr)

////functions
function sum(a,b)
{
    return a+b;
}
function substract(a,b)
{
    return a-b
}
function square(a)
{
    return a*a;
}

console.log(sum(a,b))
console.log(substract(a,b))
console.log(square(a))


////arrow functions

let hello = () =>  "Hello World";
console.log(hello())

let variable1 = (a,b) => a+b;
console.log(variable1(10,20));

//// Strings:
////methods:

let str ="aarti";
console.log(str.length)

console.log(str.charAt(0))

console.log(str.charCodeAt(0))

console.log(str.concat(" Whaval"));

console.log(str.slice(0,4))

console.log(str.toLowerCase());

console.log(str.toUpperCase())

let trimstr = "      aarti    ";
console.log(trimstr.trim());

console.log(trimstr.trimStart());

console.log(trimstr.trimEnd());

console.log(str.repeat(2));

console.log(str.replace('a','x'))

console.log(str.replaceAll('a','x'));

let newStr = "hello I am aarti whaval";

console.log(newStr.split(""))
console.log(newStr.split(" "));

console.log(newStr.indexOf("aarti"));

console.log(newStr.includes("whaval"))