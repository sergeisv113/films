let numberOfFilms = prompt('Сколько фильмов уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его', '');
    if (a != '' && a.length > 50 && a != null && b != '' && b != null) {
        personalMovieDB.movies[a] = b
    } else  {
        i--;
    }
};
if (personalMovieDB.count < 10) {
    console.log('Просмотренно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман')
} else {
    console.log('Error');
}




console.log(personalMovieDB);
