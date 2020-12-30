class Student {
    constructor(fullName, direction) {
        this._fullName = fullName;
        this._direction = direction;
    }
    showFullName() {
        return this._fullName;
    }
    nameIncludes() {
        return this.showFullName().includes(data);
    }
    static studentBuilder() {
        return new Student("Ihor Kohut", "qc");
    }
    get direction() {
        return this._direction;
    }
    set direction(newDirection) {
        return this._direction = newDirection;
    }
}

const stud1 = new Student("Ivan Petrenko", "web");
const stud2 = new Student("Sergiy Koval", "python");

console.log(stud1);
console.log(stud2);