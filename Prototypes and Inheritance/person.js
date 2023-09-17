class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._fullName = `${firstName} ${lastName}`;
    }
  
    get firstName() {
      return this._firstName;
    }
  
    set firstName(newFirstName) {
      if (this._isValidName(newFirstName)) {
        this._firstName = newFirstName;
        this._updateFullName();
      }
    }
  
    get lastName() {
      return this._lastName;
    }
  
    set lastName(newLastName) {
      if (this._isValidName(newLastName)) {
        this._lastName = newLastName;
        this._updateFullName();
      }
    }
  
    get fullName() {
      return this._fullName;
    }
  
    set fullName(newFullName) {
      if (this._isValidFullName(newFullName)) {
        const names = newFullName.split(' ');
        this._firstName = names[0];
        this._lastName = names[1];
        this._fullName = newFullName;
      }
    }
  
    _isValidName(name) {
      return typeof name === 'string' && name.trim().length > 0;
    }
  
    _isValidFullName(fullName) {
      const names = fullName.split(' ');
      return names.length === 2 && this._isValidName(names[0]) && this._isValidName(names[1]);
    }
  
    _updateFullName() {
      this._fullName = `${this._firstName} ${this._lastName}`;
    }
  }
let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla