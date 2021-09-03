let arr = [2, 3, 4, 5, 2, 4];
//[2,3,4,5]

let res = arr.filter((val, index) => index == arr.indexOf(val));

let set = Array.from(new Set(arr));

let set2 = [...new Set(arr)];

console.log(set2);

