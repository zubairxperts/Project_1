

/* let a:number=10
let b:number=20
 */
//Arithmetic Operators

/* console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(5**2) */

/* let a:number=10
let b:number=5 */

//Assignment Operators

/* console.log(a+=b)// a=a+b 10+5=15  a=15; 
console.log(a-=b)// a=a-b 15-5=10  a=10
console.log(a*=b)// a=a*b 10*5=50
console.log(a/=b)// a=a/b
console.log(a%=b)// a=a%b  */

//Comparison Operators

// = assign   let a=10
// ==  equal 
// ===  equal & dataType 

/* console.log(a==b)//value
console.log(a===b)//value & type(dataType) */


//!=  not equal
/* let x:any="monday"
let y:any="tuesday"
console.log(x!=y) //true


let a:any=10;//number
let b:any=5;//string 
// > >=   <  <=
console.log(a>b)  //10>5 t
console.log(a>=b) //10>=5 t
console.log(a<b) //10<5 f
console.log(a<=b) //10<=5 f */


//Logical Operators

// ||

// let a:number =100;
// let b:number=20;
// let c:number=20;

// //          100<20f    20==20t
// console.log(a<b    || b==c)

// // condition a,b 

// //  a  ||    b   ---->any one condition get true --->true
// //  t        t  ---> true
// //  t        f  ---> true
// //  f        t ----> true
// //  f        f ----> false 

/* let a:boolean=true;
console.log(!a) */
/* 
let a:number=10;

let res:number=a++;
console.log(a)
console.log(res)
 */

/* a++;//10+1=11// post 
console.log(a) */

// ++a;
// console.log(a)

// let b:number=20

// b--;//20-1=19
// console.log(b)
//Ternary Operator

//let age:number=16;
//           16>18f
// /condition ? true statement : false statement

let result= age>18 ? "Eligible for vote":"Not Eligible for vote"
console.log(result)