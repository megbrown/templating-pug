'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
	res.render('index', {
		name: "Baker",
	});
});

app.get('/about', (req, res, next) => {
	res.render('about', {

	});
});

app.get('/inventory', (req, res, next) => {
	res.render('inventory', {

	});
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});

