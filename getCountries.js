const countries = require("./countries");
const getRelation = require("./getRelation");
const fs = require('fs').promises;

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

/**
 * Generates temporary geoJSON files for each country's borders based on OpenStreetMap data.
 */
async function getCountries(){
	for(let country in countries){
		if(Array.isArray(countries[country])){
			let promises = [];
			let geometry = {"type": "MultiPolygon", "coordinates": []};
			for(let osmId of countries[country]){
				promises.push(getRelation(osmId));
				await sleep(1500);
			}
			Promise.allSettled(promises).then(results =>{
				for(result of results){
					if(result.value.type == "Polygon"){
						geometry.coordinates.push(result.value.coordinates);
					}
					else{
						for(let polygon of result.value.coordinates){
							geometry.coordinates.push(polygon);
						}
					}
				}
				fs.writeFile(`${process.env.tmpDir}/normal/${country}.geo.json`, JSON.stringify(geometry), "utf-8");
			});
		}
		else{
			getRelation(countries[country]).then(response => {
				fs.writeFile(`${process.env.tmpDir}/normal/${country}.geo.json`, JSON.stringify(response), "utf-8");
			});
			await sleep(1500);
		}
	}
}

module.exports = getCountries;