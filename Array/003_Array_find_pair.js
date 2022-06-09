
// You are given an arrayAofNintegers along with a target integerK.

// Your task is to find out the number of pairs of integers

    let A=[3, 0, 6, 2,7];
    let N=5; K=9;
    //write code here
    let count=0;
    let sum=0;
    for(let i=0; i<N; i++){
        for(let j=i+1; j<N; j++){
            sum=A[i]+A[j];
            if(sum==K){
                count++;
            }
        }
    }
        console.log(count);