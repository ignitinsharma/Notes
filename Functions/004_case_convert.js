// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

let lower="abcdefghijklmnopqrstuvwxyz";
let arr2=[];
let bag="";
 let big="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr=["MA", "SA", "I", "SCH", "OOL"];

  for(x=1;x<5;x++){
    let len=arr[x];
    
    for(let y=0;y<len.length;y++){
      
      for(let z=0;z<=lower.length;z++)
        
        {  if(len[y]==big[z]){
            bag=bag+lower[z];
        }
    }
  }
    
}
console.log(bag);