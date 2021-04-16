var fs = require('fs');


const deleteBook=(code)=>{
    console.log("Delete is called")
    var removeUser = code;
    const index=parseInt(removeUser)
var data = fs.readFileSync('./data/books.json');
var json = JSON.parse(data);
console.log(json)
var users = json[0];
json[index] = users.filter((user) => { return user.code !== removeUser });
fs.writeFileSync('./data/books.json', JSON.stringify(json, null, 2));
}
module.exports={deleteBook}