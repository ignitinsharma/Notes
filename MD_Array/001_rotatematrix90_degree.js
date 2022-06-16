//rotate matrix by 90 degree anti clock wisw
let R=4;
let matrix=[[1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]];
    
    for(let i=R-1;i>=0; i--){
        let bag="";
        for(let j=0; j<R;j++){
            bag=bag+matrix[j][i]+" ";
            
        }
        console.log(bag)
    }