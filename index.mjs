/**
 * Fixes floating-point error for the passed float.
 * @param {number} float The float to fix the errors of.
 * @param {number} [decimals] The number of decimals places to have in the result.
 *                            If not passed, this function will guess the number of
 *                            decimals places based on the input float.
 */
export default function fixFloat(float, decimals) {
	/** @type {number} */ let fixed;

	if(typeof decimals !== "number") {
		decimals = predictDecimals(float);
	}

	if(typeof decimals === "number") {
		const factor = 10 ** decimals;
		fixed = Math.round(float * factor) / factor;
	} else {
		fixed = float;
	}

	return fixed;
}

/**
 * Predicts the number of decimals places wanted from the passed float.
 * @param {number} float The float to predict the decimals of.
 * @returns {number | undefined} The number of decimals places the float has. If it couldn't be determined, returns undefined.
 */
function predictDecimals(float) {
	// this implementation is based on the one from the "js-floating-point" npm package
	const floatStr = `${float}`;
	const match = /^\d*\.(?:(\d*?)([0|9]*\d))$/gm.exec(floatStr);
	if(!match) return undefined; // no floating-point error
	const [ _, significant ] = match;
	return significant.length;
}