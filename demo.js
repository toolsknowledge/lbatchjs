console.log("welcome to javascript");
//welcome to javascript

console.table(["Angular","ReactJS","VueJS","NodeJS","MongoDB"]);
/*
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │ 'Angular' │
│    1    │ 'ReactJS' │
│    2    │  'VueJS'  │
│    3    │ 'NodeJS'  │
│    4    │ 'MongoDB' │
└─────────┴───────────┘
*/

console.log( 10+10 );           //20
console.log( 10+"10" );         //1010
console.log( 1 + +"1" );        //2
console.log( 1 - "1" );         //0
console.log( 10 * "10" );       //100
console.log( 10 / "10" );       //1
//Note : - , * and / operators will convert string datatype to number datatype automatically

console.log(10 - "5" + "10" - "1");
//509
console.log( "10" / "10" );         //1
console.log( "1" / "0" );           //Infinity
console.log( "10" / "A" );          //NaN
                                    //(Not an Number)
//true      ---  1
//false     ---  0
console.log( true+true );           //2
console.log(1+true);                //2
console.log("1"+true);              //1true
console.log(true/false);            //Infinity
console.log(true/"false");          //NaN

console.log( 10>9>8 );              //false
console.log( 10+5 / 10-5 );         //5.5     
console.log( (10+5) / (10-5) );     //3

a = 10;
console.log(++a);       //11

console.log( 100 == "100" );        //true
console.log( 100 === "100" );       //false
console.log( 1 == "one" );          //false
console.log( 1 === "one" );         //false

//undefined
//null
var x;
console.log(x);         //undefined

x = null;
console.log(x);         //null

// &  (and)

// |  (or)

// ^   (xor)
console.log( 1&1 );         //1
console.log( 1&0 );         //0
console.log( 0&1 );         //0
console.log( 0&0 );         //0
console.log(10>9 & 8>7 );   //1

console.log( 1|1 );         //1
console.log( 1|0 );         //1
console.log( 0|1 );         //1
console.log( 0|0 );         //0

console.log(1^1);           //0
console.log(1^0);           //1
console.log(0^1);           //1
console.log(0^0);           //0


//ternary operator
//condition ? true block : false block;
10>9 ? console.log("10>9 is true"):console.log("Bye");
//10>9 is true











































































