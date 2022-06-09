function prime(value){
    let count=0;
    for(let i=2; i<=value; i++){
        if(value%i==0){
            count++
        }
        
    }   if(count==1){
            console.log("Yes")
        }
        else {
            console.log("No")
        }            
    
}

prime(13);
// prime using functions