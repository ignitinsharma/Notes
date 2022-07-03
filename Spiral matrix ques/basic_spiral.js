//spiral #matrix in js 3*3 matrix 



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

    //this lool run for first row to last colcumn
for(let i=0; i<=right; i++){
    bag=bag+arr[top][i]+" ";
}
    top++; 


for(let j= top; j<=bottom; j++){
    bag=bag+arr[j][right]+" ";

}
    right--;

for(let k=right; k>=left; k--){

    bag=bag+arr[bottom][k]+" ";
}   
    bottom--;

for(let l=bottom; l>ktop; l--){
    bag=bag+arr[l][left]+" "
    }
    left++;
}
console.log(bag);


