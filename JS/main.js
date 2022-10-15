let numberOfFilms = + prompt("Nechta kino ko'rgansiz")
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
    let birinchiS = prompt("Yoqtirgan kinoyingizni yozing", ' ');
    let ikkinchiS = prompt("U kinoni baxolang", ' ');

    if (birinchiS == null || ikkinchiS == null || birinchiS == "" || ikkinchiS == "") {
        i--;
    } else {
        personalMovieDB.movies[birinchiS] = ikkinchiS
    }
}

if (personalMovieDB.count < 10) {
    console.log("Siz juda kam kino ko'rgansiz");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Siz kinoga qiziqasiz");
} else if (personalMovieDB.count >= 30) {
    console.log("Siz juda ko'p kino ko;rgansiz");
} else {
    console.log("Xatooo");
}