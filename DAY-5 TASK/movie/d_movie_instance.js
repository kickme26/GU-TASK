class Movie{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    display(){
        console.log(`${this.title} was made by ${this.studio} and has a rating of ${this.rating}`);
    }
}

const casino= new Movie("Casino Royale", "Eon Productions", "PG­13");
casino.display();