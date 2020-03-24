var app = require('./config/server')
 
//var rotaHome = require('./app/routes/home')(app);

//var rotaNoticias = require('./app/routes/noticias')(app);

//var rotaInfNoticias = require('./app/routes/formulario_inclusao_noticia') (app);

app.listen(3333, function(){
	console.log("Servidor rodando")
});
