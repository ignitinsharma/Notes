function cirTraversal(matrix,N) {
//write code here
    let bag="";
    for(let i=N-1; i>=0;i--){
        bag=bag+matrix[i][0]+" ";
    }
     for(let k=1; k<=N-1;k++){
        bag=bag+matrix[0][k]+" ";
    }
    for(let j=1; j<=N-1;j++){
        bag=bag+matrix[j][N-1]+" ";
    }
    for(let m=N-2; m>=1;m--){
        bag=bag+matrix[N-1][m]+" ";
    }
    console.log(bag)
}
