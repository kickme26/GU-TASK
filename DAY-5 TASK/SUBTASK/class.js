class Dog{
    height;
    weight;
    color;
    breed;
    run(){
        console.log("It is running")
    }
    bark(){
        console.log("It is barking")
    }
}

const Jimmy=new Dog();
Jimmy.color = "brown"
Jimmy.height="1m"
Jimmy.weight=10
Jimmy.breed="Lab"

console.log(`Jimmy is ${Jimmy.color} and is ${Jimmy.height} tall and weighs ${Jimmy.weight} and breed ${Jimmy.breed}`)
console.log(Jimmy.run())
console.log(Jimmy.bark() )

