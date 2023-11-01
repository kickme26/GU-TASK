class Person {
    constructor(Name, Age, Gender, Status, City) {
      this.Name = Name;
      this.Age = Age;
      this.Gender = Gender;
      this.Status = Status;
      this.City = City;
    }
  
    display() {
      console.log(`Person Name is ${this.Name} whose Age is ${this.Age}, ${this.Gender} and coming from the city ${this.City}`);
    }
  
  }
  
  const Vijay = new Person("Vijay", 45, "M", "Married", "Chennai");
  const Trisha = new Person("Trisha", 42, "F", "Unmarried", "Chennai");
  const John = new Person("John", 54, "M", "Married", "USA");
  const Lee = new Person("Lee", 59, "M", "Married", "China");

  Vijay.display();
  Trisha.display();
  John.display();
  Lee.display();