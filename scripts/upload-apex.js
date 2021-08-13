const open = require("open");
const path = require("path");
const server = "$";
const file = "AdmissionsDashboards";
const uploadScript = "UploadToHTML_Apex";

const fileUrl = `fmp://${server}/${file}?script=${uploadScript}&param=`;

const thePath = path.join(__dirname, "../", "dist", "index.html");
const url = fileUrl + encodeURIComponent(thePath);
open(url);
