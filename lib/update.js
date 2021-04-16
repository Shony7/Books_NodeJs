const { table } = require('console');
var fs = require('fs');
var data = {}

const makeUpdate = (code,name)=>{

    const Data = [{
        code:code,
        name:name
    }];
    

    var data = JSON.stringify(Data,null, 2);


    console.log(data)


    fs.readFile('./data/books.json', (err, ActData) => {
        if (err){
            console.log(err);
        } else {
            obj = JSON.parse(ActData);
            obj.push(Data);
            json = JSON.stringify(obj,null,2); 
            fs.writeFile('./data/books.json', json, (err)=>{
                if (!err) {
                             console.log('done');
                         }
            });
    }});


    // fs.writeFile('./data/books.json',data,(err)=>{
    //     if (!err) {
    //         console.log('done');
    //     }
    // })
    
}
module.exports = {makeUpdate}

// const makeUpdate = (code,name)=>
// {
    
// }


// c





    //./data/books.json
    // {
    //     code: code,
    //     name: name
    // }

    // fs.stat('./data/books', function(err, stat) {
    //     if(err.code === 'ENOENT') {
    //         console.log('File not exists');
    //     }
    // })