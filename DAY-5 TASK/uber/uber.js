class Uber{
    constructor(name, km, kmprice=10){
        this.name = name;
        this.km = km;
        this.kmprice =kmprice;
    }
    calculateAmount(){
        return this.kmprice*this.km;
    }
    displayBill(){
        let price=this.kmprice*this.km;
        return `Hi ${this.name} your uber amount is Rs:${price}`
    }

}

const Guna= new Uber("guna",10,21);
console.log(Guna.calculateAmount());
console.log(Guna.displayBill());