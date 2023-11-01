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

const Jailer= new Movie("jailer", "sunpictures", "4");
const Leo= new Movie("Leo", "seven screen", "5");
const MarkAntony= new Movie("MarkAntony", "sunpictures", "4");
Jailer.display();
Leo.display();
MarkAntony.display();