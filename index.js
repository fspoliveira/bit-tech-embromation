var express = require('express');
var app = express();
var tech_phrases = require('./tech-phrases');


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/pages/tech-phrases', function(req, res){
    res.render('pages/tech-phrases', {
        prhs: tech_phrases.myPhrases(),        
    });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});