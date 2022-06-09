//Write a function to check if the char is a small case or not.


function smallcase(a){
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let inc=0;
    for(let i=0; i<lowercase.length;i++){
      if(a==lowercase[i]){
        inc+=+1;
      }
    }if(inc==1){
        console.log("Yes");
      } else {
        console.log("No");
      }
  }
  smallcase("B");