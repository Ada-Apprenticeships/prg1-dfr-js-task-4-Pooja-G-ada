const fs = require('fs'); 


function fileExists(filename) {
  return (fs.existsSync(filename))
}


function validNumber(value) { // value can be string or numeric
  const regexNumber = /^-?\d{1,}(\.\d{1,})?$/;
  return regexNumber.test(value)
}


function dataDimensions(dataframe) {
  if (typeof dataframe === 'undefined'|| dataframe === '') return [-1, -1];
  let rows = dataframe.length; 
  let columns = Array.isArray(dataframe[0]) ? dataframe[0].length : -1 ;
  return [rows, columns];
}


function calculateMean(dataset) {
  // returns a float or false
  if (Array.isArray(dataset[0]) || !dataset.length){
    return false;
  } else {
    let sum = 0
    let noOfValues = 0
      dataset.forEach(value => {
        if (validNumber(value)) {
          sum = sum + parseFloat(value)
          noOfValues ++; 
        };
      })
    return sum/noOfValues;
  }
}


function findTotal(dataset) {
  // returns float or false
  if (Array.isArray(dataset[0]) || !dataset.length){
    return false;
  } else {
    let sum = 0
      dataset.forEach(value => {
        if (validNumber(value)) sum = sum + parseFloat(value);
      })
    return sum;
  }
} 


function convertToFloat(dataframe, col){ //dataframe, integer
  // returns an integer, which is the number that were  converted to floats.
  let countOfColumns = 0;
  dataframe.forEach(row => {
    if (validNumber(row[col]) && typeof row[col] !== 'number') {
      row[col] = parseFloat(row[col])
      countOfColumns ++;
    };
  })
  return countOfColumns;
}


function flatten(dataframe) {
  // returns a dataset (a flattened dataframe)
  let flatDataSet = []
  if (dataDimensions(dataframe)[1] !== 1){
    return []
  } else {
    dataframe.forEach(row => flatDataSet.push(row[0]));
  }
  return flatDataSet
}


function loadCSV(csvFile, ignorerows, ignorecols) {  // string, dataset, dataset
  // returns a list comprising of [dataframe, rows (integer), cols (integer)]
  fileExists(csvFile);
}


function calculateMedian(dataset) {
  // return float or false 
  
}


function createSlice(dataframe, colindex, colpattern, exportcols = []) { // dataframe, integer, string/numeric, dataset
  // returns a dataframe
  
}



// my test - 1
// console.log(fileExists())
// console.log(fileExists ( './datatrafficdataset_2000.csv' )) // returns true as the file does exist. 
// console.log(fileExists ( './wrongfilename.csv' )) // returns false as the file does not exist.

// my test - 2
// console.log(validNumber ( '0.0' )) //-> true
// console.log(validNumber ( '0.1' )) //-> true
// console.log(validNumber ( '-1.12' )) //-> true
// console.log(validNumber ( '-5' )) //-> true
// console.log(validNumber ( '5' )) //-> true
// console.log(validNumber ( 1.3 )) //-> true
// console.log(validNumber ( 1 )) //-> true
// console.log(validNumber ( 5. )) //-> true
// console.log(validNumber ( '5.' )) //-> false
// console.log(validNumber ( '+5' )) //-> false
// console.log(validNumber ( '.' )) //-> false
// console.log(validNumber ( '0.0.1' )) //-> false

// my test - 3
// df1 = [ [ 'tcp', 1, 2, 3 ],
//         [ 'icmp', 4, 5, 6 ],
//         [ 'tcp', 7, 8, 9 ] ]

// ds2 = [ 1.1 , 1.2 , 0 , 0 , 1.1 ]
// ds3 = [ 'AAA' , 'BBB' , 'CCC' ]
// // ds4 = Undefined 
// let ds4

// console.log(dataDimensions ( df1 )) //-> [ 3 , 4 ]
// console.log(dataDimensions ( ds2 )) //-> [ 5 , -1 ]
// console.log(dataDimensions ( ds3 )) //-> [ 3 , -1 ]
// console.log(dataDimensions ( ds4 )) //-> [ -1 , -1 ]

// my test - 4
// ds1 = [ 1.5, 1.9, 10.0, 50, -10, '3', '1' ]
// ds2 = [ 1.9 ]
// ds3 = [ 10, 20, -5.5, 0.5, 'AA', 10, 25 ]
// ds4 = [ ds3 ]
// ds5 = []
// console.log(calculateMean(ds1)) //-> 8.2
// console.log(calculateMean(ds2)) //-> 1.9
// console.log(calculateMean(ds3)) //-> 10
// console.log(calculateMean(ds4)) //-> 10
// console.log(calculateMean(ds5)) //-> 10
// console.log(ds4)

// my test - 5
// ds1 = [ 1.5, 1.9, 10.0, 50, -10, '3', '1' ]
// dataDimensions(ds1) //-> [ 7, -1 ]
// findTotal(ds1) //-> 57.4

// my test/convertToFloat - 6
// df1 = [ [ 'tcp', 1, '2', 3 ],
//         [ '1.2', 4, '5', 6 ],
//         [ 'tcp', 7,  8,  9 ] ]
        
// console.log(convertToFloat ( df1 , 0 )) //-> 1
// console.log(convertToFloat ( df1 , 2 )) //-> 2
// df1 //-> [ [ 'tcp', 1, 2, 3 ], [ 1.2, 4, 5, 6 ], [ 'tcp', 7, 8, 9 ] ]

// my test/Create a flatten dataframe - 7
// df1 = [ [ 5 ],
//         [ 7 ],
//         [ 9 ] ]
// dataDimensions ( df1 ) //-> [ 3 , 1 ] // 3 rows, 1 column
// flatten ( df1 ) //-> [ 5 , 7 , 9 ]
// dataDimensions ( flatten ( df1 ) ) //-> [ 3 , -1 ] // 3 items in a row,, no columns


// df2 = [ 5, 7, 9 ]
// dataDimensions ( df2 ) //-> [ 3 , -1 ] // 3 items in a row, no columns
// dataDimensions ( flatten ( df2 ) ) //-> [ 0, -1 ] // no items in a row, no column
// flatten ( df2 ) //-> [ ]

// mytest/Task 7: Create a load CSV file function
ignorerows = [ 0 ];
ignorecols = [   ];

[ dataframe, rows, cols ] = loadCSV ( './datatrafficdataset_2000.csv', ignorerows , ignorecols )
rows //--> 2001
cols //--> 21

dataDimensions (dataframe)
rows //--> 2000
cols //--> 21


module.exports = {
  fileExists, validNumber, dataDimensions, calculateMean, findTotal, convertToFloat, flatten, 
  loadCSV, calculateMedian, createSlice,
} 