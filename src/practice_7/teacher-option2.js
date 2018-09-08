import Person from './person'
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass) {
            return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${this.klass.getDisplayName()}.`);
        }
        else
            return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`);
    }

    introduceWith(student) {
        if (this.klass.getDisplayName() === student.klass.getDisplayName())
            return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${student.name}.`);
        else return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I don't teach ${student.name}.`)
    }
}
export default Teacher;





