/* Gini and Johnny are on a trip to New York, and are in awe of the marvellous tall buildings of the city
So, they decided to play a game
They decided to give every building a rating, such that
If the building is greater than the building to its left, and the building to its right,
it gets 2 point, If the building is greater than one of the buildings to it's left or the
 buildings to it right, it get's 1 point, If the building is smaller than the building to it's left and the building to it's right, it gets 0 point
Given an array, which gives the height of the buildings, find out the score of each 
building*/


let bul=[1,4,3,2,7];
count=0;
for(let i=0; i<bul.length;i++){
    if(bul[i]>bul[i-1]&&bul[i]>bul[i+1]){
        count=2;
    }

   else if(bul[i]>bul[i-1]|| bul[i]>bul[i+1]){
        count=1;
    }
    else 
    count=0;
    console.log(count)
}
