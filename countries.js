let countries = require("osm-countries").map();
countries.MTQ = 2473088;
delete countries.UMI;
module.exports = countries;