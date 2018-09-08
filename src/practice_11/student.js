import Person from './person'
class Student extends Person{
    constructor(number,name,age,klass){
        super(number,name,age);
        this.klass = klass;
    }

    introduce() {
        if(this.klass.leader == null)
            return (`My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at ${this.klass.getDisplayName()}.`);
        else return (`My name is ${this.name}. I am ${this.age} years old. I am a Student. I am Leader of ${this.klass.getDisplayName()}.`)
    }
}

export default Student;




