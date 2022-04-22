This script generates an accurate GeoJSON for world borders based on OpenStreetMap data. The is a rewrite of [simonepri's geo-maps](https://github.com/simonepri/geo-maps), which generates inaccurate maps for polygons with holes in them (i.e. the South Africa polygon ends up including Lesotho). Additionally, I also included both ISO-3166-alpha-2 and alpha-3 codes (whereas geo-maps only includes alpha-3).

As things stand, this script only generates the maritime borders from `geo-maps`, but I might get around to adding land borders at some point. The implementation is a bit of a quick patch job - i.e. I just patched the outdated `osm-countries` package rather than making my own, and error handling is very limited to say the least.

If you just wish to use the output of these scripts, you can get them directly from NPM in the following resolutions: 

* maritime borders at [1m](https://www.npmjs.com/package/@osm_borders/maritime_1m), [2m](https://www.npmjs.com/package/@osm_borders/maritime_2m), [5m](https://www.npmjs.com/package/@osm_borders/maritime_5m), [10m](https://www.npmjs.com/package/@osm_borders/maritime_10m), [20m](https://www.npmjs.com/package/@osm_borders/maritime_20m), [50m](https://www.npmjs.com/package/@osm_borders/maritime_50m), [100m](https://www.npmjs.com/package/@osm_borders/maritime_100m), [500m](https://www.npmjs.com/package/@osm_borders/maritime_200m), [500m](https://www.npmjs.com/package/@osm_borders/maritime_1m), [1000m](https://www.npmjs.com/package/@osm_borders/maritime_1000m), [2000m](https://www.npmjs.com/package/@osm_borders/maritime_2000m), [5000m](https://www.npmjs.com/package/@osm_borders/maritime_5000m), [10000m](https://www.npmjs.com/package/@osm_borders/maritime_10000m).