  class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getCircle() {
      console.log(`The radius is ${this.radius} and in ${this.color} color`);
    }
    getRadius(){
        console.log(`The radius is ${this.radius}`)
    }
    getColor(){
        console.log(`The color is ${this.color}`)
    }
    setRadius(radius) {
        this.radius = radius;
    }   
    setColor(){
        this.color = color;
    }
    getArea(){
        const pi = 3.141;
        let area = pi * this.radius * this.radius;
        console.log(`The Area is ${area}`)
    }
    getCircumference(){
        const pi = 3.141;
        let area = 2 * pi * this.radius;
        console.log(`The circumference is ${area}`)
    }
    toString(){
        return `Circle[radius = ${this.radius} and color = ${this.color}]`
    }

  }
  
  const circle1 = new Circle(10, "red");
  
  circle1.getCircle();
  circle1.getRadius();
  circle1.setRadius(40);
  circle1.getColor();
  circle1.getArea();
  circle1.getCircumference();
  circle1.toString();