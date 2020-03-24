//var dbCon = require('../../config/dbConnection') 
module.exports = function(app) {

	app.get('/noticia', function(req, res){
		//var connection = dbCon();
		var connection = app.config.dbConnection()
		connection.query('select * from noticias where id_noticia=2', function(error, result){
			if (error == null) {
				res.render("noticias/noticia",{noticia: result});
			}
			else {
				res.send(error);
			}
		});	
	});
};