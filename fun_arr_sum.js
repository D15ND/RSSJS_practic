function findSum(val) {
  let sum=0;
  for (let i=0; i<val.length; i++) {
    sum+=val[i];
  }
  console.log(`sum is: ${sum}`);
}

val=[3,5,15,32];
findSum(val);