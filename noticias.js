//console.log('Criando um site de noticias com Nodejs');
var http = require ('http');
var server = http.createServer(function (req, res){
var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end("<html><body>Noticias sobre Tecnologia</body></html>");

	} else if(categoria == '/moda'){
		res.end("<html><body>Noticias sobre Moda</body></html>");

	} else  {
		res.end("<html><body>Portal de noticias</body></html>");

	}

}).listen(3000);