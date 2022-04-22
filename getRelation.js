const axios = require("axios");
const countries = require("osm-countries");

async function getRelation(id){
	const url = `https://nominatim.openstreetmap.org/details.php?osmtype=R&osmid=${id}&polygon_geojson=1&format=json`;
	const response = await axios.get(url, {headers: {'User-Agent': 'getRelation'}});
	return response.data.geometry;
}

module.exports = getRelation;