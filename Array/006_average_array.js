
function sum(array){
    let sum=0; 
    let count=0;
    for(let i=0; i<array.length; i++){
      sum=sum+array[i];
      count=count+1
    }
    console.log(sum/count);
  }
  let value=[1,2,3,4,5]
  sum(value);