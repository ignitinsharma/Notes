
let matrix= [[1,2,3],
            [4,5,6],
            [7,8,9]];

// N printing
// output like this 7 4 1 5 9 6 3 
    /*  ^ 1   3
          4 5 6           like N
          7   9
    */

    let n=matrix.length;
    let bag="";
    for(let i=n-1; i>=0; i--){
        bag=bag+matrix[i][0]+" ";
    }
    
    for( j=1, k=1; j<=n-1, k<=n-1; j++, k++ ){
        bag=bag+matrix[j][k]+" "; 
    }
    
    for(let l=n-2; l>=0; l--){
        bag=bag+matrix[l][n-1]+" ";
    }
    console.log(bag)

