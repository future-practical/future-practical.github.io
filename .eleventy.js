module.exports = (eleventyCongig) => {
	eleventyCongig.addPassthroughCopy("assets")

	eleventyCongig.addFilter("typeof", (element) => {
		return typeof element;
	} )

	eleventyCongig.addFilter("stringify", (element) => {
		return typeof element == "string" ? element : JSON.stringify(element);
	} )

	eleventyCongig.addFilter("concat", (array1, array2) => {
		return array1.concat(array2)
	} )

	eleventyCongig.addFilter("split", (string, deliniator) => {
		if (typeof string == "string") {
			return string.split(deliniator);
		}
	} )
}
