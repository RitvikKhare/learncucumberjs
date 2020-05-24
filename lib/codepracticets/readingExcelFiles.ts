//import readXlsxFile from "read-excel-file/node";
const node_xj =require("xls-to-json");

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
    input: "/Users/ritvikkhare/Documents/workspace/GITREPOS/learncucumber/5-11-2020/Alok/Results/Regression/Run_10-Apr-2020_05-01-01_PM/Excel Results/Summary.xls",  // input xls
    output: "output.json", // output json
    sheet: "Result_Summary",  // specific sheetname
    rowsToSkip: 5 // number of rows to skip at the top of the sheet; defaults to 0
  }, function(err: any, result: any) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });