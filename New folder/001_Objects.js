let obj={
    name:"Ram",
    age:34,
    hobbies:["coding", "Reading"],
    print: function(){
        console.log("Hello", this.name);
        console.log(this.age);
        console.log(this.hobbies);   
  }
  
}

obj["print"]();


  /*
  Hello Ram
  Age is 34
  My hobbies are Coding Reading
  */