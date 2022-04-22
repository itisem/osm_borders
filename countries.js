let countries = require("osm-countries").map();
countries.MTQ = 2473088;
delete countries.UMI;
countries.PSE = [1803010, 1703814];
module.exports = countries;