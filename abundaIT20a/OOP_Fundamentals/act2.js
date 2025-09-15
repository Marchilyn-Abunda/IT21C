class Animal {
    constructor(name) {
        this.name = name;
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }

    eat(){
         console.log(this.name + " is eating");
    }

    play(){
        console.log(this.name + " is playing");
    }

}

var dog = new Animal("Dog");
// dog.eat();
// dog.sleep();
// dog.play();

console.log(dog.name);