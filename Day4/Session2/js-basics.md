# Javascript basics

Variables :
3 ways to declare variables in js :
let : cannot be redeclared but can  reassign
const : cannot be redeclared and reassigned
var : can be redeclared aand resaasigned


Data Types:

number 
string
boolean
undefined
null 
object

operators:

arithmetic Operator : + , - , * , / , % , **
logical operators : && , || , !
assignmnet operator : = , += ,-=,*=,/=,%=
comparision operators : < , > , <= , >= , == , === 
typeof : typeof operator returns a data type of variable
ex: let a = 10;
    console.log(typeof a)
    it returns number 

    Note : if we apply typeof on null it returns object (it is a bug of js)



conditional statements:

if-else : check one condition
if- elseif -else : check two or more conditions
switch : exact match


loops:

for loop : iterates over values and expressions
while : iterates over condition 
do while : executes first then check condition
for..of : iterates over each element or array

Arrays :

Two ways to declare and initialize an array
1. let arr = [1,2,3,4,5] (declare and initialize in single line)
2. let arr = new Array(); (Using constructor)
you can update or assign value via index
arr[0] = 10;
arr[2] = 20;
Access the elements of array using their index
console.log(arr[0])

Note : array indexing starts from 0 

arrays can store each data type;
let strArr = ["apple" , "banana" , "mango"]

array inbuilt methods

1. length : returns length or array
2. at(n) : retruns element at n'th position
3. pop() : removes and returns last element of array
4. shift() : removes first element 
5. push(n) : add new element at end of an array
6. unshift() : add new element at starting of an array
7. concat() : create new array by merging two existing array
8. flat() : create new array with subarray concatenated with specified depth
9. slice(0,n) : returns array from index start from 0 to end index n-1 (n is excluded here)
10. sort((a,b)=>a-b) : sort the array elements
11. reverse() : reverse array elements


Functions :

In js functions are defined using function keyword
ex :  function sum(a,b){
        return a+b;
       }
       function sum takes two parameters and returns sum of these two numbers
       Mainly functions are preffered when you have to perform same task repetatively


arrow funtions : 

arrow functions are shorter syntax for function expresion
arrow functions are used when return have only one statement
ex : let x = (a,b) => a+b;   function that returns the addition of two elements
     let x = () => "Hello" ; returns default value


Strings :

one of the data type of js
inbuilt methods of strings and string arrays :
1. length : returns length fo string
2. charAt(n) : returns character at n'th position
3. charCodeAt(n) : returns ascii value of character at n'th position
4. concat : concatenate two strings
5. slice(x,y) : return new string start from x'th character and ends with y'th character
6. toUpperCase() : converts the string into uppercase
7. toLowerCase() : converts the String into lowercase
8. trim() : remove all extra white spaces (both starting and ending)
9. trimStart() : removes white spaces from starting of the string
10. trimEnd(): removes white spaces from end of the string
11. repeat(n) : repeates the strings n times
12. replace(str1, str2) : replace str1 with str2 
13. replaceAll(str1, str2) : it replace all occurences of str1 with str2
14. split:
    a. split(",") : split string into array separated by comma
    b. split(" ") : split string into array separated by space
15. indexOf(str1) : returns index  str1 within that string
16. lastIndexOf(str1) : returns last index of str1 within that string
17. includes(str1) : returns true if string includes str1 otherwise false