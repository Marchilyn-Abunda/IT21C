// Object

let student = {
    name: "Marchilyn",
    age: 18,
    isEnrolled: true
};


// // Access properties in two ways

// // 1
console.log(student.name + "\n" + student.age + "\n" + student.isEnrolled);

// // 2

console.log(student["name"] + "\n" + student["age"] + "\n" + student["isEnrolled"]);


//  Adding function inside the object

let employee = {
    firstName : "Marchilyn",
    lastName : "Abunda",
    status : "COS",
    job : "IT Faculty",
    department : "Institute for Computer Studies",
    fullname : function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(employee.fullname());