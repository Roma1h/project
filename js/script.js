"use strict";

//1)
const numberofFilms=+prompt('Сколько фильмов вы уже посмотрели?',' ' );
console.log(numberofFilms);


//2)

const personalMovieDB = {
    count:numberofFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

};

//3)
const a =prompt('Один из последних просмотренных фильмов?',''),
 b=prompt('На сколько оцените его?',''),
 c=prompt('Один из последних просмотренных фильмов?',''),
 d=prompt('На сколько оцените его?','');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB);

    


