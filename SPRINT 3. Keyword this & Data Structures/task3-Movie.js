class Movie {
    constructor(name, category, startShow) {
        this.name = name;
        this.category = category;
        this.startShow = startShow;
    }
    watchMovie() {
        return "I watch the movie " + this.name + ", which is " + this.category + " and the " + this.startShow + "release";
    }
}

let movie1 = new Movie("Titanic", "drama", 1999);
let movie2 = new Movie("Troya", "historical", 2004)

console.log(movie1.watchMovie());
console.log(movie2.watchMovie());
console.log(movie1, movie2);