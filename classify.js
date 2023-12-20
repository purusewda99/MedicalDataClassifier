const { loadData } = require("./data");


function classifyDescription(description) {
    const categoryKeywords = loadData()
    let categoryCounts = {};
    let maxCount = 0;
    let bestCategory = 'Unknown';

    description.toLowerCase().split(/\s+/).forEach(word => {
        if(categoryKeywords[word]) {
            categoryKeywords[word].forEach(category => {
                categoryCounts[category] = (categoryCounts[category] || 0) + 1;
                if(categoryCounts[category] > maxCount) {
                    maxCount = categoryCounts[category];
                    bestCategory = category;
                }
            })
        }
    });

    return bestCategory;
}

module.exports = {
    classifyDescription
}