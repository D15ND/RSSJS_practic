let arr1=[5, 4, 7, 8, 6, 2];
let arr2=[3, 1, 2, 9, 10, 4];
let arrSum=arr1.concat(arr2);
let deleteRepeatItems=new Set(arrSum);
let againToMassiv=Array.from(deleteRepeatItems);
let sortFromMinToMax=againToMassiv.sort((a,b) => a-b);

console.log(sortFromMinToMax);