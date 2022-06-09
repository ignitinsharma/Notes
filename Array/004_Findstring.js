/*Given a stringSof all lowercase letters and each letter has a value of its own.
The value of the alphabetais1,b is 2,c is 3..... tillz is 26.
Now you have to find the total value of the given string. 
The total value of a string is the sum of values of all characters present in string.*/

let S="aba";
let sum=0;
let str="abcdefghijklmnopqrstuvwxyz";
for(let i=0; i<str.length; i++){
    for(let j=0; j<S.length; j++){
        if(S[j]==str[i]){
            sum+=(i+1)
        }
    } 
}
console.log(sum);


// })
// // num[j]=str[i];
// c.push=(num[j]=str[i])
// if(S==c){
//     sum+=num[j]
// }
