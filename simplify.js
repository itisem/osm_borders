const mapshaper = require("mapshaper");

/**
 * Simplifies a map file's geometry up to any given distance, and outputs it to a different file.
 * @param  {String} input    Input filename.
 * @param  {String} output   Output
 * @param  {Number|String} interval The distance to which the object should be simplified, given in metres.
 */
async function simplify(input, output, interval){
	await mapshaper.runCommands(`-i ${input} -simplify dp interval=${interval} keep-shapes -o ${output}`);
}

module.exports = simplify;