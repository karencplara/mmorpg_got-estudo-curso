/* importar o mongodb */

var mongo = require('mongodb');

var connMongoDb = function(){
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //endereco
            '27017', // porta
            {}
        ),
        {}
    );
    return db;
}

module.exports = function() {
 return connMongoDb;

}