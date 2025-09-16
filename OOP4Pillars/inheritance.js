class Person{
    constructor(name, gender, age){
        this.name=name;
        this.gender = gender;
        this.age = age;
    }

    displayInfo(){
        console.log("Name: " + this.name + "\n Gender: " + this.gender + "\nAge: " + this.age);
    }
}

// Child class for Student

class Student extends Person{
    constructor(name, gender, age, studentID, yearLevel){
        super(name, gender, age);
        this.studentID = studentID;
        this.yearLevel = yearLevel;
    }

    displayStudentInfo(){
        console.log("Name: " + this.name + "\nGender: " + this.gender + "\nAge: " + this.age + "\nStudentID: " + this.studentID + "\nYear Level: " + this.yearLevel);
    }
}

// Child class for Instructor

class Instructor extends Person{
    constructor(name, gender, age, employeeID, position, yearsEmployed){
        super(name, gender, age);
        this.employeeID = employeeID;
        this.position = position;
        this.yearsEmployed = yearsEmployed;
    }

    displayInstructorInfo(){
         console.log("Name: " + this.name + "\nGender: " + this.gender + "\nAge: " + this.age 
            + "\nEmployee ID: " + this.employeeID + "\nPosition: " + this.position
            + "\nYears Employed: "+ this.yearsEmployed
         );
    }
}


// Create object for student

var student = new Student("Mark", "Male", 54, "20241501", "2nd Year");
console.log("Student Info \n");
student.displayStudentInfo();
console.log("\n");
student.displayInfo();

// Create object for instructor

var instructor = new Instructor("Marchilyn", "Female", 18, "20181108", "Instructor I (COS)", 2);
console.log("Instructor Info \n");
instructor.displayInstructorInfo();
instructor.displayInfo();