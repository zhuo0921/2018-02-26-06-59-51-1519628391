import Teacher from "../practice_11/teacher"

class Class {
    constructor(number) {
        this.number = number;
        this.teacher = new Teacher();
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        console.log(`I am ${this.teacher.name}. I know ${student.name} become Leader of Class ${this.number}.`);
        if(this.number === student.klass.number) {
            this.leader = student;
            student.isLeader = true;

        } else {
            console.log('It is not one of us.');
        }
    }

    appendMember(stu) {
        stu.klass = this;
        //console.log('I am Tom. I know Jerry has joined Class 2.');
        console.log(`I am ${this.teacher.name}. I know ${stu.name} has joined Class ${this.number}.`);
    }

    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }

    registerJoinListener(teacher) {
        this.teacher = teacher;
    }
}

export default Class;








