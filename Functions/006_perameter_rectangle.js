 let obj={

     len : 2,
     bre : 5,

     areaof: function() {

        let areaofrec= (2*(this.len+this.bre));
        console.log("area of parameter", areaofrec);
     },

    area: function() {

        let area= (this.len*this.bre);
        console.log("area of rectangle", area);
     }

}

obj["areaof"]();
obj["area"]();