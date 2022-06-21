// rotate a matrix into 90degree anti clock wise 
   
let R=4;
    let matrix=
    [[1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]];
    
    //write code here
  for(let j=R-1; j>=0;j--){
      let bag="";
      for(let i=0; i<R;i++){
          bag=bag+matrix[i][j]+" ";
      }
      console.log(bag)
  }
  

