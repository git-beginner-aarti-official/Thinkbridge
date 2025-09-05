function addition(a,b)
{
    return a+b;
}

function substraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return Math.floor(a/b);
}

function calculator(a , b , operation)
{
    let res =0;
    switch (operation) {
        case "+" :
            res = addition(a,b);
            console.log(res)
            break;
        
        case "-" :
            res = substraction(a,b);
            console.log(res)
            break;
        
        case "*" :
            res = multiplication(a,b);
            console.log(res)
            break;
        
        case "/":
            res = division(a,b);
            console.log(res)
            break;

        default :
            console.log("Invalid Operator");
            return
    }
}


calculator(20, 10 , "+")
calculator(20 , 10 , "-")
calculator(20 , 10 , "*")
calculator(20 , 10 , "/")
calculator(20 , 10, "");