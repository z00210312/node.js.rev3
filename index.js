const express = require('express');
const app = express();
const path = require('path');
const logger = (req,res,next)=>{
	console.log('logging...');
	next();
};
const PORT = process.env.PORT || 4000;
const exec = require('child_process').execFile;

app.use(express.static(__dirname));


let users = [
	{id: 1,
	first_name:'Abby',
	last_name:'Doe',
	email:'abbyd@gmail.com'},
	{id: 2,
	first_name:'Bob',
	last_name:'Chen',
	email:'chenbob@gmail.com'}
];



app.use(logger);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/', function(req, res) {
	res.render('index',{title:'Customers',users: users});
	console.log("fun() start");
	exec('./helloworld.exe', function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    }); 
});

app.listen(PORT, function(){
    console.log('Your node js server is running');
});