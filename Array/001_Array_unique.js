let arr=["nitin", "krishan","manish","neeraj","nitin","banty"];

let unique={};
    for(let i=0;i<arr.length; i++){
    let name= arr[i];
    unique[name]=1;
    }
console.log(unique);