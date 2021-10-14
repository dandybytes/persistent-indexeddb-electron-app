const fs = require('fs')
const path = require('path')
const csvParser = require('csv-parser')

const sampleDataPath = path.join(__dirname, '../data/sample-user-data-us-500.csv')

const csvData = []
fs.createReadStream(sampleDataPath)
  .pipe(csvParser())
  .on('data', csvrow => {
    try {
      csvData.push(csvrow)
    } catch (error) {
      console.error(error)
    }
  })
  .on('end', function () {
    postMessage(csvData)
  })
