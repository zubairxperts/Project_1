

/* let mark1:number =55
let mark2:number=65
let mark3:number=45
 */

//Array ...ref:number[]
//                  0  1  2   3  4 ->index
/* let marks:number[]=[45,55,30,45,65]
//           

console.log(marks)
console.log(marks[0])
console.log(marks[4])//45 */
//console.log(marks[6])//undefined

/* let marks:Array<number>=[20,50,45,30]
console.log(marks) */

/* let names:Array<string>=["ravi","rajesh","kannan"]
console.log(names)

names.push("david")
console.log(names) */

/* let employee:[number,string,number,boolean]=[75,"ram",9875654321,false];
console.log(employee) */
//                   0       1     2
/* let cars:string[]=["honda","kia","tata"]
console.log(cars)

let size=cars.length;
console.log("No of cars:",size)
console.log("No of cars:",cars.length) */

//iteration 
//1-for loop traditional 

/* for(let i=0;i<cars.length;i++){
    console.log(cars[i])
}
 */

// for...in 

/* for(let i in cars){
    console.log(cars[i])
} */

//for...of

/* for(let i of cars){
    console.log(i)
}
 */

//Array
/* let a:number[]=[10,20,30,45,50];

// tuple
let detail:[number,string,any]=[78,"david",78];
 */

//                 0 1  2  3  4
// let num:number[]=[10,20,30,40,50];
// // lenght ->attribute
// console.log("Length of given array:",num.length)

// //push() --->add single and multiple value
// num.push(70)
// console.log("After push:",num)
// num.push(80,70)
// console.log("After push:",num)// [10, 20, 30, 40,50, 70, 80, 70]

// let latstvalue=num.pop();
// console.log("Removed value:",latstvalue)
// console.log("after pop:",num);//[10, 20, 30, 40,50, 70, 80]

// let removedshift=num.shift()
// console.log("Removed Value:",removedshift)
// console.log("After shift():",num)//[20, 30, 40,50, 70, 80]

// //unshift -->add  single or multiple value in starting  of array
// num.unshift(100,200)
// console.log(num)//[ 100, 200, 20, 30,40,  50, 70, 80]

// let joinValue=num.concat([90,100])
// console.log("updated value:",joinValue)//[ 100, 200, 20, 30,  40,50,  70, 80, 90, 100]
// //   0    1   2   3    4  5   6   7    8   9
// //[ 100, 200, 20, 30,  40,50, 70, 80, 90, 100]
// //slice- extract particular portion from array
// let extract=num.slice(2)
// console.log(extract)

//                  0  1  2  3  4 
// let value:number[]=[100,10,20,30,40,50];
// //                     starting,ending
// let extract=value.slice(1,4)  //4-1=3
// console.log(extract)
// console.log(value)


// 
// //              0  1  2   3  4 5

// console.log(a)

// a.splice(2,1)
// console.log(a)

// //            starting,ending
// let sl=a.slice(2,5)
// console.log("slice:",sl)
// console.log(a)


// let result=a.includes(500)
// console.log(result)
/* let firstIndex=a.indexOf(30)
console.log("firstindex:",firstIndex)

let lastIndex=a.lastIndexOf(30)
console.log("last index:",lastIndex) */
// let updated=a.push(50,60)
// // console.log("length of array:",updated)
// console.log(a)

// let removed=a.pop()
// console.log("Removed value:",removed)
// console.log(a)

// let totalValue=a.unshift(100,200)
// console.log("totalvalue:",totalValue)
// console.log(a)

// let firstRemovedValue=a.shift();
// console.log("Removed value:",firstRemovedValue)
// console.log(a)

// let a:number[]=[10,20,30,40,30,10];

// console.log(a)
// a.splice(1,2)
// console.log(a)

// let b:number[]=[80,90,70,10,20,30];
// //               0  1  2  3 4   5
// console.log(b)
// b.splice(2,2)
// console.log(b)



let a:number=1,2,3,4;
