// // Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function isOdd(){
    let arr=[0,1,2,3,4,6,7,9,10];
    for(let i=0;i<arr.length;i++){
      if(arr[i]%2==1){
        console.log("true");
      } else{
        console.log("false");
      }
    }
  }
  isOdd();