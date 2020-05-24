"use strict";
//import readXlsxFile from "read-excel-file/node";
var node_xj = require("xls-to-json");
// File path.
/*
readXlsxFile('/path/to/file').then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
})*/
// Readable Stream.
/*
readXlsxFile(fs.createReadStream('/path/to/file')).then((rows) => {
  ...
})*/
node_xj({
    input: "/Users/ritvikkhare/Documents/workspace/GITREPOS/learncucumber/5-11-2020/Alok/Results/Regression/Run_10-Apr-2020_05-01-01_PM/Excel Results/Summary.xls",
    output: "output.json",
    sheet: "Result_Summary",
    rowsToSkip: 0 // number of rows to skip at the top of the sheet; defaults to 0
}, function (err, result) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(result);
    }
});
