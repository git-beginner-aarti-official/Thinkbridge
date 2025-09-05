//creating object using object literals
let obj1 = {
    name : "Aarti",
    age : 22,
    place : "Pune"
}  

console.log(obj1)
console.log(obj1.name)
console.log(obj1.age)
console.log(obj1.place)

//creating objects using new keyword
let obj2 = new Object();
console.log(typeof obj2) 

//properties
obj2.name = "ram"
obj2.age = 54
obj2.place="mumbai"

console.log(obj2)

//add new properties
obj1.nationality = "indian"
obj2.nationality = "portugies"

console.log(obj1)
console.log(obj2)

//delete existing property
delete obj1.nationality
delete obj2.nationality

console.log(obj1)
console.log(obj2)

//nested objects
let person = {
    name : "XYZ",
    age : 23,
    skills : {
        skill1 : "Java",
        skill2 : "SQL",
        skill3 : "HTML",
        skill4 : "CSS",
        skill5 : "Javascript"
    }
}

console.log(person)

//accessing inner properties
console.log(person.skills.skill1)
console.log(person.skills.skill2)
console.log(person.skills.skill3)
console.log(person.skills.skill4)
console.log(person.skills.skill5)

//Adding method to object 

person.information = function() {
    console.log(this.name + this.age + this.skills)
}

person.information();



//accessing objects usign for loop
for(let key in person)
{
    console.log(key , person[key])
}

for(let i of Object.entries(person)){
    console.log(i)
}

for(let i of Object.keys(person)){
    console.log(i)
}

//copy object values into other objects
let oldObj = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
    key4 : "value4",
    key5 : "value5"
}

//by using object.assign property
let newObj1 = Object.assign(oldObj);
console.log(newObj1)

//by using spread operator
let newObj2 = {...oldObj}
console.log(newObj2)

//by manual copying an objects
let newObj3 = {}
for(let key in oldObj)
{
    newObj3[key] = oldObj[key]
}
console.log(newObj3)

