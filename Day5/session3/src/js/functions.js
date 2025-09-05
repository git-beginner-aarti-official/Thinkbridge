// Javascript Functions 

//function declaration 

function print()
{
    console.log("Hello World");
}

// Function Expression 
let print1 = () => console.log("Hello World 2");

print()
print1();


//anonyms functions:
let sum = function(a,b) {
    return a + b;
}

console.log(sum(10,20))

//function expression with parameter
let diff = (a,b) => {
    return a-b;
}

console.log(diff(100,20))


let reverseNum = (n) =>{
    let reversed =0;
    while(n !== 0)
    {
        let digit = n % 10;
        reversed = reversed*10 + digit;
        n = Math.floor(n/10);
    }
    return reversed
}

console.log(reverseNum(123))


let reverseString = (str) =>{
    return str.split("").reverse().join("");
}
console.log(reverseString("javascript"));


function transposeMatrix(matrix)
{
    let res = [];
    for(let i=0;i<matrix.length;i++)
    {
        let temp =[];
        for(let j=0;j<matrix[i].length;j++)
        {
            temp.push(matrix[j][i])
        }
        res.push(temp);
    }
    return res
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(transposeMatrix(matrix));

function factorial (num){
    let fact = 1;
    while(num!==1)
    {
        fact *= num;
        num = num - 1;
    }
    return fact;
}

console.log(factorial(5))


function sumArrayElements(arr)
{
    let sum =0;
    for(let i=0;i<arr.length;i++)
    {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArrayElements([1,2,3,4,5]))

function checkPalindromicNumber(num){
    let revNum = reverseNum(num);
    if(revNum === num){
        return true;
    }
    return false
}
let n = 121;
console.log(checkPalindromicNumber(n));


function countVowels(string)
{
    let str = string.toLowerCase();
    let count  =0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i] === 'a'||str[i] === 'e'||str[i] === 'i'||str[i] === 'o'||str[i] === 'u')
        {
            count++
        }
    }
    return count;
}
console.log(countVowels("Aarti"));

let findMaxFromArr = (arr) => Math.max(...arr)
console.log(findMaxFromArr([4,5,2,7,8,1]))

let findEven = (arr) => arr.filter((n) => n % 2 === 0)
console.log(findEven([2,4,1,3,7,8,9]))





// Block scope

let x = 10;

function abc(){
    let y = 20;
    console.log(x)  // x can be acessible in function 
    console.log(y)  // y can be accessible in function
}

console.log(x)  //x can be accessible because it has a global scope
// console.log(y)  //y cannot be accessible because it has functional scope


function outerFunction(){
    let a =10;
    function innerFunction(){
        let b = 20;
        console.log(a) //both are acccessible
        console.log(b)
    }
    innerFunction();
    console.log(a)  //accessible
    // console.log(b)  //not accessible
}
outerFunction()
