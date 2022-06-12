// //Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

let str="DEmo";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";
let bag="";
for(let i=0; i<str.length; i++){                //
    for(let j=0; j<upper.length; j++){
        if(str[i]==upper[j]){
            bag+=lower[j];
        }
        else if( str[i]==lower[j]) {
           bag+=upper[j]
        }
    }
}
console.log(bag)