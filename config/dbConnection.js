var mysql = require('mysql');

var connMysql = function(){
    try{
        console.log('conexão mysql estabelecida!');

        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'portal_noticias'
        })
        
    } catch (e){
        console.log('error: ', e);
    }
}

module.exports = function() {
    return connMysql;
}