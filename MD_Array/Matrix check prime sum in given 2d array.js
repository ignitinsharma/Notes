
    // check no is prime or not in given array and alsso count how much no are prime means their sun 
    //The prime numbers in the 2D array are2,3,5,7. Therefore, the required output is 4

    let arr= [[1,2,3],
            [4,5,6],
            [7,8,9]];

    let N=3;
    let M=3;

    let count=0;
    let n;
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            n=arr[i][j];
            if(prime(n)){
                count++
            }
            else {
                continue;
            }
           
        }
        
    }
    function prime(value){
      let count=0;
      for(let i=2; i<=value; i++){
          if(value%i==0){
              count++
          }
          
      }   if(count==1){
             return true;
          }
          else {
              return false;
          }        
    
    
    
  }
  console.log(count)
  
  