class Movie{
    constructor(title, studio, rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    display(){
        console.log(`${this.title} was made by ${this.studio} and has a rating of ${this.rating}`);
    }
    getPG(Movie){
        return Movie.filter(m => m.rating === "PG")
    }
}

const Jailer= new Movie("jailer", "sunpictures", "PG4");
const Leo= new Movie("Leo", "seven screen", "PG5");
const MarkAntony= new Movie("MarkAntony", "sunpictures");
Jailer.display();
Leo.display();
MarkAntony.display();

const pgMovie= new Movie();    

console.log(pgMovie.getPG([Jailer, Leo,MarkAntony]));