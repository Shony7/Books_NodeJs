const books = require('../data/books.json')


const getAll =() =>
{
    return books
}


const getOne =(code)=>{
    return books.filter(book => book[0].code == code)
}

module.exports = {getAll,getOne}