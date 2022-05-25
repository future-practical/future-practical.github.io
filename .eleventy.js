module.exports = (eleventyCongig) => {
	eleventyCongig.addWatchTarget("./css/")
	eleventyCongig.addPassthroughCopy("css")
	eleventyCongig.addPassthroughCopy("assets")
}
