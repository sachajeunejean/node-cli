#! /usr/bin/env node

const axios = require('axios');

if (process.argv.length != 3) {
	console.log("Error: the command need one paramater.");
	return;
}

const country = process.argv[2];
const countryCode = 0;
const currentYear = new Date().getFullYear();
const url = `https://date.nager.at/api/v3/publicholidays/${currentYear}/${countryCode}`;

console.log(country);
console.log(currentYear);
console.log(url);