
// ... spread and as well as rest depending on senario 

let arr = [2,3,4,5];

let arr2 = [1,10].concat(arr);

let arr3 = [1,10, ...arr];


function sum(...arr){///rest 
 console.log(arr)
}

sum(2,3,4,5,6)


console.log(arr3);




let user ={
    name:"syed",
    id:9
}

let admin={
   ...user,//rest operator 
   city:"hyd"
}

console.log(admin)
