const mapshaper = require("mapshaper");

async function simplify(input, output, interval){
	await mapshaper.runCommands(`-i ${input} -simplify dp interval=${interval} keep-shapes -o ${output}`);
}

module.exports = simplify;