// Function 

/* Syntax

function functionName(parameter):returnType{
// logic(code)
} */


//functionName(parameter)

//Named function with no parameters & no returnType
/* function message(){
    console.log("Good Morning")
}
message() */

//Named function with parameters & without return type
/*  function rabc(a:number,b:number){
    console.log(a+b)
 }

 abc(10,10) */

 //Named function with parameters & with return type

 /*  function abc(a:number,b:number):number {
        return a+b;//20
 }

 console.log(abc(10,10))

 let result:number=abc(10,20);
 console.log(result)

 console.log(result/2) */

//rest parameters
//  function addNumber(...num:number[]){
//     let i;
//     let sum:number=0;
//     for(i=0;i<num.length;i++){
//         sum=sum+num[i];
//     }
    
//     console.log("sum values:",sum)
//  }
// //     num[0 1 2 3]--->index  num[i]
//  addNumber(1,2,3,4);
//  //        1 2 3 4  --->4 lenght

//123--->length=3
//sql---->length--> 3
//012 ---> 2

 // i=0 i<4 sum=sum+num[i]  i++           //sum=0

 // i=0 0<4t sum=0+num[0]   i=i+1        // sum=1
 //          sum=0+1=1      i=0+1=1
 // i=1 1<4t sum=1+num[1]                //sum=3
 //             =1+2=3      i=1+1=2
 // i=2 2<4t sum=3+num[2]                //sum=6
 //             =3+3=6      i=2+1=3
 // i=3 3<4t sum=6+num[3]                //sum=10
 //             =6+4=10     i=3+1=4
 // i=4 4<4f---->loop terminated

 
//Named Function with optional parameter[?]

/* function detail(id:number,name:string,phno:number,mailId?:string){
        console.log("employee id:",id),
        console.log("emploee name:",name)
        if(mailId != undefined){
        console.log("employee email:",mailId)}
        }


detail(101,"David",987654,"david@gmail.com")
detail(102,"ravi",6231321) */

//default parameter[=]
/* function productDetail(slNo:number,productName:string,price:number=100){
    console.log("Product sl No:",slNo),
    console.log("product Name:",productName)
    console.log("product price:",price)
}

productDetail(1,"cup")
productDetail(2,"mouse",1000) */

//Anonymous Function

/* let detail=function():string{
        return "product Name :Mouser,product brand: dell";
}

console.log(detail())
 */
//Anonymous Function with parameter
    /* let add=function(a:number,b:number):number{
        return a+b;
    }

    console.log(add(10,20))

 */
//Arrow Functions /lamda functions
/* 
let msg=()=>{ console.log("Good Morning")}
msg()

function msg1(){}

let msg2=()=>{console.log("message")}
msg2() */

//Arrow function with paramters and  return type
/* let add=(a:number,b:number):number=>{
    return a+b;
}


console.log(add(10,10))
 */

//arrow funtion with implicit return 

/* let add=(a:number,b:number):number=>a+b;
console.log(add(10,20)) */

///?   ---->optional
/* let detail=(id:number,name:string,email?:string):void=>{
        console.log("id:",id);
        console.log("Name:",name);
       if(email!=undefined){
        console.log("email:",email)}
}

detail(10,"arun")

detail(1,"david")
detail(2,"raj","raj@gmail.com") */

//Arrow function with default 
/* let  productDetail=(productName:string,productPrice:number=100)=>{
    console.log("Product Name:",productName);
    console.log("product price:",productPrice);
}

productDetail("pen")
productDetail("keyboard",1000) */

//arrow function with rest parameters
// let noOfValues=(...elements:(number|string)[]):number=>{
//     return elements.length;
// }

// console.log(noOfValues(1,2,3,4))
// console.log(noOfValues(45,78,5,"Demo",546,"mobile"))

//call back

// function message(msg:string){
//     console.log(msg)
// }

// function display(firstname:string,callBack:(msg:string)=>void){
//         console.log("Name:",firstname)
//         callBack("Goodmorning")

// }

// message("Hello")
// display("David",message)

/* function add(a:number,b:number):number{
    return a+b;
}



function calculate(a:number,b:number,callback:(x:number,y:number)=>number){
    return callback(a,b)
}

console.log(calculate(10,10,add)) */
//                   10,20,30,40,50
// function getlength(...num:number[]):number{
//     //5
//     return num.length
// }

// function calculate(c:(...num:number[])=>number,...nums:number[]):number{
//     return c(...nums)
// }

// console.log(calculate(getlength,10,20,30,40,50))

