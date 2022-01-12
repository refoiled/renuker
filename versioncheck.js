const fetch = require("node-fetch")
const currentVersion = require("./version.json").version

module.exports = async () => {
    const fetchObject = await fetch("https://raw.githubusercontent.com/refoiled/renuker/main/version.json");
    const responseData = await fetchObject.json();
    const latestVersion = responseData.version;
    if(currentVersion === latestVersion) return false;
    else return true;
}