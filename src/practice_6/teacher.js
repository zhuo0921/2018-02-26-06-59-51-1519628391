import Person from './person'
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass) {
            return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${this.klass}.`);
        }
        else
            return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`);
    }
}
export default Teacher;



