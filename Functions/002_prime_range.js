//Use the above function to print the Primes from 2 to a given limit

function prime(check){
    let fact=0;
    for (let j=0;j<=check;j++){
      if(check%j==0){
        fact=fact+1;
      }
    }
  if(fact==2){
    return true;
  } else{
    return false;
  }
  }
  for(let i=2; i<=10;i++){
    let b=prime(i);
    if(b==true){
      console.log(i,"is prime");
    } else {
       console.log(i,"not prime")
    }
  }
  