

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его', '');
            if (a != '' && a.length > 50 && a != null && b != '' && b != null) {
                personalMovieDB.movies[a] = b
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы класический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман')
        } else {
            console.log('Error');
        }

    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
          personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любим[ый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = genres;
            if (genres === null || genres === '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {

                personalMovieDB.genres[i - 1] = genres;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
    }
};

//
/*
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
//
const arr = [2, 13, 26, 8, 10];
arr.sort();
//[10, 13, 2, 26, 8]
arr.sort(compareNum);
//[2, 8, 10, 13, 26]
function compareNum(a, b) {
    return a - b
}
*/
//
