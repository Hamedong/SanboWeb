const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const bodyParser= require('body-parser');
const port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

app.listen( port, function(){
    console.log ('listening on 5000')
});

app.get('/', function(요청, 응답){
    응답.render('index.ejs'
    )
})
