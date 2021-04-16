const bookadaptor=require('../lib/Books-adaptor')
const getAll= ()=>
{
    const books = bookadaptor.getAll()
    return books
}

const getOne= (code)=>
{
    const books = bookadaptor.getOne(code)
    return books
}



module.exports = {getAll,getOne}