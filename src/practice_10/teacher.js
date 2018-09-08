import Person from './person'
class Teacher extends Person{
    constructor(parameters){
        let {number, name, age, klasses} = parameters;
        super(number,name,age);
        this.klasses = klasses;
    }

    introduce(){
        let className = `No Class`;
        if(this.klasses && this.klasses.length > 0){
            className = `Class ${this.klasses.map(klass => klass.number).join(", ")}`;
        }
        return super.introduce() + ` I am a Teacher. I teach ${className}.`;
    }
}
export default Teacher;






