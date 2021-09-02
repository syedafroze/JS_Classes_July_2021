let marks = [2, 3, 4, 3, 5];

//push - add the value to the end
//synatx  arrayName.push(value)

marks.push(6);

console.log(marks);

//pop() - > removes the value from the end
marks.pop();
console.log(marks);

//unshift - add the value to the begining

marks.unshift(1);
console.log(marks);

//shift -> removes the values from the first Index

marks.shift();
console.log(marks);

//splice - removes add the value to any index

//syntax - arrayName.splice(startIndex,  no fo values to be removed , values to be added )

let startPos = marks.lastIndexOf(3);

console.log(startPos);
marks.splice(startPos, 2, 6, 7);
console.log(marks);

let arr1 = [2, 3, 4, 5];

//[4,9,16,25] ;

function SqaureArr(arr1) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr[i] = arr1[i] * arr1[i];
  }
  return newArr;
}

console.log(SqaureArr(arr1));

/*
created a empty array 
used for loop 
added sqaured values into new Array
returned array 
*/

//map  arrayname.map(function(val){ return val*val})

/*
creates a  new array 
passes each value of array to the function 
store returned values into the new array 
returns the array 
*/

let result = arr1.map(function (value, index, array) {
  return value * index;
});

let result2 = arr1.map((value) => value * value);

console.log(result, result2);

//
let arr2 = [3, 15, 10, 24, 17, 8];

function filterArr(arr2) {
  let newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < 10) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}
console.log(filterArr(arr2));

/*
created new Arr
for loop 
if true then push the value into new Arr 
return 
*/

//filter - > arrayName.filter(function(val,index,array){if(val<10){return val;}})

/*
empty array


*/
let filteredArray = arr2.filter((val) => val < 10);

console.log(filteredArray);

//includes
let arr3 = [4, 5, 6, 7];
console.log(arr3.includes(7));

let arr4 = [6, 11, 7, 21];

let filtered = arr4.filter((val) => val < 10);
if (arr4.length == filtered.length) {
  console.log(true);
} else console.log(false);

//forEach 

let arr7 = [2,3,4,5];
console.log("---- -forEach ----")
let resultForEach = arr7.forEach((val)=>console.log(val*val))

//let arr [{},{}]

console.log(resultForEach);



//return true only when all values are less than 10 else returns false;

//srini
function test(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      return true;
    }
  }
  return false;
}
console.log(test(arr4));

//every

let result3 = arr4.every((val) => val < 10);
console.log(result3);

let arr5 = [2, 3, 15, 7, 1];

//return true if atleast one value is greater than 10

//some

let result4 = arr5.some((val) => val > 10);
console.log(result4);

//reduce

let arr6 = [2, 3, 4, 5];

//reduce(callback function , intialValue )

let sum = arr6.reduce((val1, val2) => val1 * val2, 10 );

/*
val1 = 2 val2 = 3   => 5
val1 = 5 val2 = 4 => 9
val1 = 9  val2 = 5   => 14 


*/
console.log(sum);

//index       0               1               2
let arr8= [ ["pragyan",8] ,["srini",10],["kalyani" ,25]];
//             0       1      0      1     0         1
let arr9 = [2,4,2,1]

// for(let i =0; i < arr9.length ; i++){
//   console.log(arr9[i])
// }
// //for in 

// for(let i in arr9){
//   console.log(arr9[i])
// }

//for of 

for(let i of arr9){
  console.log(i);    
}
