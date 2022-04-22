const countries = require("./countries");
const getRelation = require("./getRelation");
const fs = require('fs').promises;

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

async function getCountries(){
	for(let country in countries){
		getRelation(countries[country]).then(response => {
			fs.writeFile(`${process.env.tmpDir}/normal/${country}.geo.json`, JSON.stringify(response), "utf-8");
		});
		await sleep(1500);
	}
}

module.exports = getCountries;