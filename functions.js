//Functions
//Particular Business logic called as Function
//Functions are used to reuse the business logic=
//Types of Functions
//1) Named Functions
//2) Anonymous Functions
//3) Arrow Functions (ES6)

//Named Functions
//The Function with Particular Name Called as Named Function
/*  
    Syntax

    Function Definition

    function functionname(param1,param2,param3,....param n){
        //business logic
    }

    Function Calling

    functionname(arg1,arg2,arg3,.....arg n);

*/

/*
    function func_one(){
        console.log("welcome to functions");
    }
    func_one();
    //welcome to functions
*/


/*
    function func_one(param1,param2,param3){
        console.log(param1, param2, param3);
    }
    func_one("Hello_1","Hello_2","Hello_3");
    //Hello_1 Hello_2 Hello_3

    func_one("ReactJS","NodeJS","MongoDB");
    //ReactJS NodeJS MongoDB

    func_one();
    //undefined undefined undefined

    func_one(undefined,"Hello_2");
    //undefined Hello_2 undefined

    func_one(null,null,null);
    //null null null

    func_one(undefined,undefined,undefined,"Hello_4");
    //undefined undefined undefined
*/
/*
    function func_one(){
        return "Welcome";
    }
    let res = func_one();
    console.log(res);           //Welcome
*/

function func_one(num){
    return num*num;
}
let res1 = func_one(2);
let res2 = func_one(4);
let res3 = func_one(6);
let res4 = res1+res2+res3;
console.log(res4);          //56

















