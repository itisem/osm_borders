const countries = Object.keys(require("./countries"));
const simplify = require("./simplify");
const getCountries = require("./getCountries");
const iso2 = require("country-iso-3-to-2");
const fs = require('fs').promises;

const distances = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
process.env.tmpDir="./tmp";
process.env.outDir="./output";

getCountries().then(() => {
	let simplifyPromises = [];
	for(let country of countries){
		for(let distance of distances){
			simplifyPromises.push(simplify(`${process.env.tmpDir}/normal/${country}.geo.json`, `${process.env.tmpDir}/simplified/${country}_${distance}.geo.json`, distance));
		}
	}
	Promise.allSettled(simplifyPromises).then(results => {
		for(let distance of distances){
			let readPromises = [];
			for(let country of countries){
				readPromises.push(fs.readFile(`${process.env.tmpDir}/simplified/${country}_${distance}.geo.json`, "utf8"));
			}
		 	Promise.allSettled(readPromises).then(results => {
				let geo = {"type":"FeatureCollection", "features": []};
				for(let i = 0; i < results.length; i++){
					let newResults = {
						"type": "Feature", 
						"properties": {"isoA3": countries[i], "isoA2": iso2(countries[i])},
						"geometry": JSON.parse(results[i].value)
					};
					geo.features.push(newResults);
				}
				fs.writeFile(`${process.env.outDir}/maritime_${distance}m.geo.json`, JSON.stringify(geo), "utf-8", () => {});
			});
		}
	});
});