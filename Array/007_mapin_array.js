
    // code for map values str and arrays
    let N=30;
    let K=3;
    let str="abc"
    let sum=0;
    let st="abcdefghijklmnopqrstuvwxyz";
  
    for(let i=0; i<st.length; i++){
     for(let j=0; j<K; j++){
       if(st[i]==str[j]){
            sum=sum+(N+i);
            
            }
        }
          
        }
        console.log(sum)

