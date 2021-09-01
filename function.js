// //what is a function

// //function is a block of code that can be invoked/called where ever neccesary in program

// /*
// for very 50 loc 
// 10 loc 

// */
// //function declaration

// function Sum(marks) {
//   let totalSum = 0;
//   for (let i = 0; i < marks.length; i++) {
//     totalSum = totalSum + marks[i];
//   }
//   console.log(totalSum);//9
//   return totalSum;
// }

// //average

// // let arr = [2, 3, 4];

// // function Average(marks) {
// //  let total =  Sum(marks);
// //   let avg = total / marks.length ;
// //   console.log(avg) ; 
// // }

// // Average(arr);


// function Add(a,b){
//    return a+b;
// }

// const Add2 = (a,b) =>  a+b; 

// let res = Add(2,3)
// let res2 = Add2(2,3);
// console.log(res,res2)

/*
regular function 
recurssive function
Higher order function
callabck function
currying fucntion 
IIFE
arrow function 
*/

//nested fucntion 

// function A(){

//     console.log("in A");//in A 

//     function B(){
//         console.log("in B");'//in B'
//         return "done "
//     }

//    let returnedValueFromB =  B();

//    return [returnedValueFromB, "execution" , 6];
  
// }

// let returnedValue = A();

// console.log(returnedValue);//done 


function A(){

    console.log("in A");//in A 

   return  function B(){
        console.log("in B");'//in B'
        return "done "
    }

  
  
}

let returnedValue = A()();

console.log(returnedValue);


// IIFE ( immediatly invoked function expression)

(function immediatlyExecute(){console.log("hello")})();


// 5! = 5*4*3*2*1 = 120 
//      5*(5-1)*(5-2)

function Fact(num){

    if(num==1){
        return 1;
    }
    else{
        return num *Fact(num-1)
    }
}

Fact(5)
/*
Fact(5) = return 5 * 24; //120
Fact(4)  = return 4 *6
Fact(3) = return 3 *2*1
Fact(2) => return 2 * 1;
Fact(1) -> return 1;

*/

/*
k - in A , 
R - in A
*/



function Sum(a,b){
 return a+b;
}


function Avg(functionSum , a , b){
    let totalSum = functionSum(a,b);
    let average = totalSum/2;
    console.log(average)
}

Avg(Sum, 2,4);

//callback function -> A function which is passsed as an argument to another function is called Callabck function .

//Higher Order Fucntion - > A fucntion that accepts another function as its parameter is called HOF .
