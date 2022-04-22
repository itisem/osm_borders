This script generates an accurate GeoJSON for world borders based on OpenStreetMap data. The is a rewrite of [simonepri's geo-maps](https://github.com/simonepri/geo-maps), which generates inaccurate maps for polygons with holes in them (i.e. the South Africa polygon ends up including Lesotho). Additionally, I also included both ISO-3166-alpha-2 and alpha-3 codes (whereas geo-maps only includes alpha-3), and the maps' precision is actually based on distances.

# Packages and previews 

## Maritime borders

**NPM Package** | **Resolution** | **Preview URL\*** | **Package size**
[@osm_borders/maritime_1m](https://www.npmjs.com/package/@osm_borders/maritime_1m) | 1 metre | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_1m.geo.json) | 49.9 MB
[@osm_borders/maritime_2m](https://www.npmjs.com/package/@osm_borders/maritime_2m) | 2 metres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_2m.geo.json) | 49.8 MB
[@osm_borders/maritime_5m](https://www.npmjs.com/package/@osm_borders/maritime_5m) | 5 metres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_5m.geo.json) | 49.4 MB
[@osm_borders/maritime_10m](https://www.npmjs.com/package/@osm_borders/maritime_10m) | 10 metres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_10m.geo.json) | 48.2 MB
[@osm_borders/maritime_20m](https://www.npmjs.com/package/@osm_borders/maritime_20m) | 20 metres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_20m.geo.json) | 35.6 MB
[@osm_borders/maritime_50m](https://www.npmjs.com/package/@osm_borders/maritime_50m) | 50 metres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_50m.geo.json) | 21.2 MB
[@osm_borders/maritime_100m](https://www.npmjs.com/package/@osm_borders/maritime_100m) | 100 metres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_100m.geo.json) | 13.7 MB
[@osm_borders/maritime_200m](https://www.npmjs.com/package/@osm_borders/maritime_200m) | 200 metres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_200m.geo.json) | 8.46 MB
[@osm_borders/maritime_500m](https://www.npmjs.com/package/@osm_borders/maritime_500m) | 500 metres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_500m.geo.json) | 4.27 MB
[@osm_borders/maritime_1000m](https://www.npmjs.com/package/@osm_borders/maritime_1000m) | 1 kilometre | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_1000m.geo.json) | 2.47 MB
[@osm_borders/maritime_2000m](https://www.npmjs.com/package/@osm_borders/maritime_2000m) | 2 kilometres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_2000m.geo.json) | 1.42 MB
[@osm_borders/maritime_5000m](https://www.npmjs.com/package/@osm_borders/maritime_5000m) | 5 kilometres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_5000m.geo.json) | 706 kB
[@osm_borders/maritime_10000m](https://www.npmjs.com/package/@osm_borders/maritime_10000m) | 10 kilometres | [Preview](http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/itisem/osm_borders/master/previews/maritime_10000m.geo.json) | 419 kB


\* Note: For precise packages, the preview may be slow and browser-intensive to load.

# Some technical details

Behind the scenes, this script queries the [OpenStreetMap Nominatim API](https://nominatim.openstreetmap.org/ui/search.html). This is actually quite important, since geo-maps' data source, [polygons.openstreetmap.fr](https://polygons.openstreetmap.fr/) is the reason as to why polygons with holes were handled improperly.

Maps are simplified using the Douglas-Peucker simplification algorithm provided by [mapshaper's](https://github.com/mbloch/mapshaper/wiki) `simplify-map` feature.

Things that could be implemented better: handling changes to OSM IDs (the `osm-countries` package used by this script is already outdated, and I had to patch it for this code) and including land borders, as well as doing some error handling.

# Licence

The source code for this project is released under the MIT licence. Map data © [OpenStreetMap](https://openstreetmap.org) contributors, released under the [ODbL](https://opendatacommons.org/licenses/odbl/) licence.