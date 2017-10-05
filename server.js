'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
	res.render('index', {
		name: "Bakery Bakery",
	});
});

app.get('/about', (req, res, next) => {
	res.render('about', {

	});
});

let inventory = [
	{
		name: 'Bagels',
		price: '$1.00 ea.'
	},
	{
		name: 'Cookies',
		price: '$.50 ea.'
	},
	{
		name: 'Muffins',
		price: '$1.20 ea.'
	},
	{
		name: 'Cupcakes',
		price: '$1.50 ea.'
	},
	{
		name: 'Donuts',
		price: '$0.75 ea.'
	}
];

app.get('/inventory', (req, res, next) => {
	res.render('inventory', {
		inventory: inventory
	});
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});

