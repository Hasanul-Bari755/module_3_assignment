class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.name}, I'm ${this.age} years old, and I'm majoring in ${this.major}.`
    );
  }
}

const student1 = new Student("Alice", 20, "Computer Science");

student1.introduce();
