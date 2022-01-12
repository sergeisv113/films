let  numberOfFilms;
function start(){
    numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его', '');
        if (a != '' && a.length > 50 && a != null && b != '' && b != null) {
            personalMovieDB.movies[a] = b
        } else  {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман')
    } else {
        console.log('Error');
    }
}
detectPersonalLevel();
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        let genre = prompt(`Ваш любим[ый жанр под номером ${i}`);
         personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();
const optio = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        dg: 'red'
    }
};
console.log(Object.keys(optio).length);

