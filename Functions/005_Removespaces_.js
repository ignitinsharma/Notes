//Write a function to replace spaces in a given string with -;


let str="my name is Nitin sharma is upcoming SDE at google.";
let bag="";
for(let i=0; i<str.length; i++){
  if(str[i]==" "){
    bag=bag+"-";
}
  else{
    bag=bag+str[i];
}
}
console.log(bag);