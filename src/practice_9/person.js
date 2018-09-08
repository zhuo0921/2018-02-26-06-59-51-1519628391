class Person {
    constructor(number,name,age){
        this.number = number;
        this.name = name;
        this.age = age;
    }

    introduce(){
        return (`My name is ${this.name}. I am ${this.age} years old.`);
    }
}

export default Person;






