var mysql = require('mysql');

var connMySQL = function() {
	return mysql.createConnection({
		host: '172.27.48.235',
		user: 'root',
		password: 'M0n1qu3@@',
		database: 'portal_noticias'
		//insecureAuth: true
	});
	
}
module.exports = function(){
 	return connMySQL;
}

