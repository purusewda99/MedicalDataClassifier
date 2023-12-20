const readXlsxFile = require('read-excel-file/node');

let categoryKeywords = {};

function loadData() {
    readXlsxFile('./medical_data.xlsx')
    .then((rows) => {
        rows.shift();   // Remove header
        rows.forEach(row => {
            const [description, , , category] = row;
            // Convert description to lower case and split into words
            const keywords = description.toLowerCase().split(/\s+/);

            // Store each keyword with its associated category
            keywords.forEach(keyword => {
                if(!categoryKeywords[keyword]) {
                    categoryKeywords[keyword] = new Set();
                }
                categoryKeywords[keyword].add(category);
            });
        })
    })

    return categoryKeywords;
}

module.exports = {
    loadData
}