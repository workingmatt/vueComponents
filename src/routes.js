module.exports = function(app){

	app.get('/', function(req,res){
		res.render('index.html');
	});

	app.get('/forms', function(req,res){
		console.log('get /forms');
//		res.render('form.html');
	});

	app.post('/', function(req,res){
		console.log('post root');
	});

	app.post('/forms', function (req, res){
		console.log('Rxd post');

// TODO Try async to send back result of file write to client with 
//		res.send(answer); here and the following in app.js (client side)
//		this.$http.post('/forms', msg).then(function(response){
//				console.log('***');
//				console.log(response.body);
//			});
	});

}