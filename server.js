var Config = require('./config'),
    conf = new Config(),
	HTTP = require('http'),
	express = require('express'),
	bodyParser = require('body-parser'),
	routes = require('./routes/index'),
	app = express(),
	port = process.env.PORT || conf.port;

app.set('view engine', 'pug');
app.use(require('morgan')('dev'));
app.use(express.static(__dirname + '/public'));
app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));

// use index in routes to handle pug routing
// require('./routes')(app);

// app.get('/', (req, res) => {
// 	res.render('index.pug');
// });
app.get('/', routes.home);
// app.get('/', routes.);
// app.get('/', routes.);
// app.get('/', routes.);
// app.get('/', routes.);
// app.get('/', routes.);
// app.get('/', routes.);
// app.get('/', routes.);
// app.get('/', routes.);

HTTP.createServer( app ).listen(port, function() {
	console.log('Server up on port', port);
});
