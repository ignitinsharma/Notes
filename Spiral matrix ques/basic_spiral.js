//spiral #matrix in js 3*3 matrix 

// answer is 1 2 3 6 9 8 7 4 5 in that form

let arr = [[1,2,3],
        [4,5,6],
        [7,8,9]];
let n=3;


let top=0; 
let bottom=n-1;
let left = 0;
let right= n-1;
let bag=" ";

while(top<=bottom && left<=right){

    //this lool run from first row to last column print 1 2 3
for(let i=0; i<=right; i++){
    bag=bag+arr[top][i]+" ";
}
    top++; 

    
    //this lool run from first last column to last row print 6 9
for(let j= top; j<=bottom; j++){
    bag=bag+arr[j][right]+" ";

}
    right--;

    //this lool run from 2nd last column to first column and print 8 7
for(let k=right; k>=left; k--){

    bag=bag+arr[bottom][k]+" ";
}   
    bottom--;

    //this lool run from 2nd last column to 2nd row and print 4
for(let l=bottom; l>top; l--){
    bag=bag+arr[l][left]+" "
    }
    left++;
}
console.log(bag);


