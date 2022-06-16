//question=> https://false-trouser-16e.notion.site/Problem-1-d0d782da0f8d4fafb9043dfb9748069b

let names=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age=[32, 30, 26, 28, 44];

let arr2=[];
  for(let i=0;i<=names.length-1;i++){
    let obj={};  
  obj["name"]=names[i];
    obj["age"]=age[i];
    arr2.push(obj);
  }
for(let j=0;j<=arr2.length-1;j++){
  let cri=arr2[j];
if(cri["age"]>30){
  console.log(cri["name"])
}
}