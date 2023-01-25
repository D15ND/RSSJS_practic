let arr1=[1,3,5,7,9,11,12];
let arr2=[1,2,3,4,5,10,12];

let sum=arr1.concat(arr2);
let del=new Set(sum);
let qwe=Array.from(del);

let sort=qwe.sort((a,b) => a-b);
console.log(sort);