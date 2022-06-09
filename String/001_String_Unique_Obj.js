let name="Nitin";
let obj={};

for(let i=0; i<name.length; i++){
    let me=name[i];
    if(obj[me]==undefined){
        obj[me]=1;
    }
    else{
        obj[me]++;
    }
}
console.log(obj)