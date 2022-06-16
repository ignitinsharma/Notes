//pattern 
// 1 2 3
// 4 5 6
// 7 8 9

let n=3;
let bag="";
for(let i=1; i<=n*n; i++){
let count=0;
  bag+=i+" ";
  if(i%n==0){
    bag+='\n'
  } 
}
console.log(bag)