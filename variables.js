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
























