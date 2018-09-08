import Person from './person'
class Teacher extends Person{
    constructor(number,name,age,klass){
        super(number,name,age);
        this.klass = klass;
    }

    introduce(klass) {
        if (this.klass) {
            return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${this.klass.getDisplayName()}.`);
        }
        else
            return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`);
    }
}
export default Teacher;





