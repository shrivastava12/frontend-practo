const fs = require('fs');
const path = require('path');


const data = fs.readdirSync('./');


const filteredData = data.filter(data => path.extname(data) === '.js')

console.log(filteredData);

filteredData.forEach(file => {
	const filenameArray = file.split('.')
	const baseFilename = filenameArray[0];
	fs.renameSync(`./${file}`, `./${baseFilename}.jsx`)
})



