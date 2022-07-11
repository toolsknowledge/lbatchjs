//string
//collection of characters called as string
//""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) technically called as template literal
//``(backtick) operator used to define paragraphs(multiline strings)
var frontend = "ReactJS";
var backend = "Java";
var database = "Oracle";
var fullstack = `${frontend}...${backend}...${database}`;
console.log(fullstack);
//ReactJS...Java...Oracle


var tablename = "employees";
var sal = 50000;
var query = `select * from ${tablename} where esal>${sal}`;
console.log(query);
//select * from employees where esal>50000

var username = "sathya";
var password = "sathya@123";
var login = `select * from ${tablename} where uname='${username}' and upwd='${password}'`;
console.log(login);
//select * from employees where uname='sathya' and upwd='sathya@123'

//number
//five types are numbers are possible
//decimal
//double
//hexedecimal
//octal
//binary
//hexadecimal numbers will prefix with "0x"
//octal numbers will prefix with "0o"
//binary numbers will prefix with "0b"
var decimal = 100;
var double = 100.12345;
var hexadecimal = 0x123ABC;
var octal = 0o123;
var binary = 0b1010;
console.log(decimal,double,hexadecimal,octal,binary);
//100 100.12345 1194684 83 10

//boolean
//true
//false
var flag = true;
var flag1 = false;
console.log(flag);      //true
console.log(flag1);     //false

//undefined
//variable declared but value not assigned
var x;
console.log(x);     //undefined

//null
//making variable availble to garbage collector
x=null;
console.log(x);     //null






var arr1  = ["Angular",
             "ReactJS",
             "VueJS",
             "NodeJS",
             "MongoDB"];
console.log( arr1[0], arr1[4] );
//Angular MongoDB


var arr2 = [100,200,300,400,500];
arr2.forEach(function(element,index){
    console.log(element,index);
});
/*
    100 0
    200 1
    300 2
    400 3
    500 4
*/

var arr3 = ["Hello_1",
            "Hello_2",
            "Hello_3",
            "Hello_4",
            "Hello_5"];
var arr4 = ["Welcome_1",
            "Welcome_2",
            "Welcome_3",
            "Welcome_4",
            "Welcome_5"];            
arr3.forEach((element,index)=>{
    console.log(element, arr4[index]);
});
/*
    Hello_1 Welcome_1
    Hello_2 Welcome_2
    Hello_3 Welcome_3
    Hello_4 Welcome_4
    Hello_5 Welcome_5
*/

var arr5 = ["Angular","ReactJS","VueJS"];
var arr6 = ["dot net","Java","Python"];
var arr7 = ["Oracle","MySQL","SQLServer"];
arr5.forEach((element,index)=>{
    console.log(element,arr6[index],
                arr7[index]);
});
//JSON
//JSON Stands for Java Script Object Notation
//JSON also called as JavaScript Objects
//JSON, used to transfer the data over the Network
//JSON is light weight
//Objects --- {}
//Arrays  --- []
//Data    --- key&value pairs
var obj = {
    "key1" : "Hello_1",
    "key2" : "Hello_2",
    "key3" : "Hello_3"
};
console.log( obj.key1, obj.key2, obj.key3 );
//Hello_1 Hello_2 Hello_3

var obj1 = {
    "sub_one" : "Angular",
    "sub_two" : "dot net",
    "sub_three" : "SQLServer"
};

//bigint
//bigint is the datatype
//bigint introduced in ES6
//by using bigint we can store large numbers
//range of bigint is ">2^53-1"
//bigint numbers suffix with "n"
var large = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log(large);


//Symbol
//Symbol is the datatype
//Symbol datatype introduced in ES6
var secured = Symbol("Hello");
console.log(secured);
//Symbol(Hello)


var _abc;
//var 123abc;         //Error
var _123abc;
//var abc#123;        //Error
//var var;              //Error

//typeof
//used to know the datatype
console.log(typeof "Hello");//string
console.log(typeof 100);//number
console.log(typeof true);//boolean
console.log(typeof undefined);//undefined
console.log(typeof null);//object
console.log(typeof []);//object
console.log(typeof 100n);//bigint
console.log(typeof Symbol("Hello"));//symbol
console.log(typeof function(){});  //function
console.log(typeof {});    //object












































