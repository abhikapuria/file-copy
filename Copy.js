var path = require("path");
var ncp = require("ncp").ncp;

ncp.limit = 16;

//var srcPath = path.dirname(require.main.filename); //current folder

var srcPath = "C:\\Users\\akapuria\\Documents\\LINQPad Queries";
var destPath = "P:\\My Documents\\LinqPadQueries"; //Any destination folder

console.log("Copying files...");
console.log(srcPath);
console.log(destPath);
ncp(srcPath, destPath, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("Copying files complete.");
});
