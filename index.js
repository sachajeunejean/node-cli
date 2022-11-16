#! /usr/bin/env node

import axios from "axios";
import countryList from "country-list";
import chalk from "chalk";

async function getCountryInformation(url) {
	const request = await axios.get(url);

	return request;
}

if (process.argv.length != 3) {
	console.log("Error: the command need one paramater.");
} else {

	const country = process.argv[2];
	const countryCode = countryList.getCode(country);
	const currentYear = new Date().getFullYear();
	const url = `https://date.nager.at/api/v3/publicholidays/${currentYear}/${countryCode}`;

	const response = getCountryInformation(url);

	response.then(datas => {
		for (let i = 0; i < datas.data.length; i++) {
			const date = chalk.greenBright(datas.data[i].date);
			const name = chalk.red(datas.data[i].name);
			const localName = chalk.cyanBright(datas.data[i].localName);
			console.log(`${date}: ${name} - aka - ${localName}`);
		}
	});
}