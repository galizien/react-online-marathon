class Movie {
    constructor(name, category, startShow) {
        this.name = name;
        this.category = category;
        this.startShow = startShow;
    }

    watchMovie() {
        return "I watch the movie " + this.name + this.category + this.startShow;
    }

}

let movie1 = new Movie("Titanic, ", "which is drama ", "and the 1999 realise");
let movie2 = new Movie("Troya, ", "which is historical ", "and the 2004 realise")

console.log(movie1.watchMovie());
console.log(movie2.watchMovie());