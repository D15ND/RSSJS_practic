function colourAssociation(array){
  let result=[];
  for (let i=0; i<array.length; i++) {
    result[i]={[array[i][0]]: array[i][1]}
  }
  console.log(result);
}
colourAssociation('white', 'goodness');