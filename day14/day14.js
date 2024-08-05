// Activity 1: Class Definition

// Task 1 & 2

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  }
  
  // Creating an instance of the Person class

  const person1 = new Person('Anubhav', 19);
  console.log(person1.greeting()); // Output: Hello, my name is Anubhav and I am 19 years old.
  person1.updateAge(31); // Output: Updated age: 31
  
  // Activity 2: Class Inheritance
  
  // Task 3 & 4
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getStudentId() {
      return this.studentId;
    }
    
    // Override the greeting method
    greeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  }

  // Creating an instance of the Student class

  const student1 = new Student('Anubhav', 19, '123103070');
  console.log(student1.getStudentId()); // Output: 123103070
  console.log(student1.greeting()); // Output: Hello, my name is Anubhav, I am 19 years old, and my student ID is 123103070.
  
  // Activity 3: Static Methods and Properties
  
  // Task 5 & 6
  class Person12 {
    static genericGreeting() {
      return 'Hello, this is a generic greeting!';
    }
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  }
  
  // Call the static method without creating an instance
  console.log(Person12.genericGreeting()); // Output: Hello, this is a generic greeting!
  
  class Student12 extends Person12 {
    static numberOfStudents = 0;
  
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student.numberOfStudents++;
      console.log(`Total number of students: ${Student.numberOfStudents}`);
    }
  
    getStudentId() {
      return this.studentId;
    }
  
    greeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  }
  
  // Creating instances of the Student class to check the static property
  const student2 = new Student12('Kunal', 19, '123103020'); // Output: Total number of students: 1
  
  // Activity 4: Getters and Setters
  
  // Task 7 & 8
  class Person13 {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const parts = name.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  
    greeting() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  
    static genericGreeting() {
      return 'Hello, this is a generic greeting!';
    }
  }
  
  // Creating an instance and using the getter and setter
  const person2 = new Person13('Anubhav', 'dixit', 19);
  console.log(person2.fullName); // Output: Anubhav dixit
  person2.fullName = 'kunal gautam ';
  console.log(person2.fullName); // Output: kunal gautam
  console.log(person2.greeting()); // Output: Hello, my name is Jane Smith and I am 19 years old.
  