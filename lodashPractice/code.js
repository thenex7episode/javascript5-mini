const movies = require('./data.json');
const _ =require('lodash');

const titles = _.map(movies, 'title');
// console.log('--------titles', titles)

const movie1 = movies[0]
const stuff = _.omit(movie1, ['title', 'year', 'genres'])

// console.log('------stuff', stuff)



var object = { 'a': [{ 'b': { 'c': 3 } }] };

const value = _.get()

let arr1 = [1,1,2,3,3,4,5,6]
function removeDuplicates(arr) {
    let newArr = []
    let nonDuplicates = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i]===arr[i+ 1]) {
            newArr.push(arr[i])
        }else {
            nonDuplicates.push(arr[i])
        }
    }
    console.log(nonDuplicates)
    return nonDuplicates
}

removeDuplicates(arr1)

const moviesWithYearAndTitle =_.map(movies, e => {
return {
    title: e.title,
year: e.year
}
})
const moviesByYear = _.groupBy(movies, e => _.pick(e, 'title'))
console.log(moviesWithYearAndTitle)