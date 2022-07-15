//let keyword
//let keyword introduced in ES6

/*
    let data = 100;
    let data = 200;
    console.log(data);
    //var : 200
    //let : SyntaxError: Identifier 'data' has already been declared

    //var keyword allows the duplicate variables
    //let keyword wont allows the duplicate variables
*/

/*
    console.log(data);
    let data = "Hello";
    //var : undefined
    //let : ReferenceError: Cannot access 'data' before initialization

    //accessing variable before it's declaration and initlization with var keyword called as variable hoisting

    //we can fix variable hoisting with let keyword
*/

/*
    for(let i=0;i<5;i++){

    }
    console.log(i);
    //var : 5
    //let : ReferenceError: i is not defined
    //global polluting issue raised because of var keyword
    //we can fix global polluting issue by using let keyword
*/

/*
    function func_one(){
        if(true){
            var x = 10;
            let y = 20;
        }
        console.log(x);         //10
        console.log(y);         //ReferenceError: y is not defined
    }
    func_one();
    //var keyword contains function scope
    //let keyword containes block scope
*/

/*
            var                 let
    var keyword introduced  let keyword introduced
    in ES1                  in ES6

    duplicate variables     duplicate variables
    allowed                 not allowed

    global polluting issue  we can fix global polluting
    raised because of       issue by using let keyword
    var keyword

    variable hoisting raised  we can fix variable
    because of var keyword    hoisting with let keyword

    var keyword containes    let keyword containes block
    function scope           scope
*/





//const keyword
//const keyword introduced in ES6
//variable reinitilization not possible with const keyword

/*
    const data = 100;
    data = 200;
    //TypeError: Assignment to constant variable.
*/

/*
    const msg = "Angular";
    msg = "ReactJS";
    //TypeError: Assignment to constant variable.
*/


/*
    const arr = [10,20,30,40,50];
    //arr = [];       //TypeError: Assignment to constant variable.

    //arr = [100,200,300,400,500];  //TypeError: Assignment to constant variable.

    arr[0] = 100;
    arr[2] = 300;
    arr[5] = 600;
    console.log(arr);       //[ 100, 20, 300, 40, 50, 600 ]
*/
const obj = {
    "key1" : "hello_1",
    "key2" : "hello_2",
    "key3" : "hello_3"
};

//obj = {};  //TypeError: Assignment to constant variable.

// obj = {
//     "key1" : "welcome_1",
//     "key2" : "welcome_2",
//     "key3" : "welcome_3"
// };
//TypeError: Assignment to constant variable.


obj.key1 = "welcome_1";
obj.key3 = "welcome_3";
obj.key4 = "welcome_4";
console.log(obj);
/*
    {
  key1: 'welcome_1',
  key2: 'hello_2',
  key3: 'welcome_3',
  key4: 'welcome_4'
}
*/




































