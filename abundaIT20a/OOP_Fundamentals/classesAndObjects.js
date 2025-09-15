class Student{

    // Create constructor
    constructor(name, course){
        this.name= name;
        this.course = course;
    }

// introduce method
    introduce(){
        console.log("Hi, I am " + this.name + " and I study " + this.course);
    }

}

// Create a Object 

var s1 = new Student("Marchilyn Abunda" , "Information Technology");
s1.introduce();


var s2 = new Student("Grace", "BSBA");
s2.introduce();