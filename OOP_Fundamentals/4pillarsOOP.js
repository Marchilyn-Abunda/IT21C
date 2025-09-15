// class Animal{

//     #name;

//     constructor(name){
//         this.#name = name;
//     }

//     setName(val){
//         this.#name = val;
//     }

//       getName(){
//       return this.#name;
//     }
// }

// var dog = new Animal("Dog2");
// dog.setName("CAT");
// console.log(dog.getName());
// // console.log(dog.name);


//  ATM Encapsulation

class BankAccount{
    #balance;

    constructor(owner, balance){
        this.owner = owner;
        this.#balance = balance;
    }

    // deposit

    deposit(amount){
        this.#balance +=amount; 
        console.log("Deposited: " + amount );
    }

    // Getter method

    getBalance(){
        return this.#balance;
    }

}

var acc = new BankAccount("Marchilyn Abunda", 100);

// do deposit

acc.deposit(1000);
acc.deposit(1);
console.log("Current Balance: " + acc.getBalance());
