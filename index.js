// import scrape from 'website-scraper'

// let options = {
//     urls: ['https://www.udemy.com/'],
//     directory: 'G:/node js api/1NodeJsTopics/udemy/',
// };

// scrape(options).then((result) => {
//     console.log("Website succesfully downloaded");
// }).catch((err) => {
//     console.log("An error ocurred", err);
// });


import scrape from 'website-scraper'
const websiteUrl = 'https://wp.w3layouts.com/eduschool/';

scrape({
    urls: [websiteUrl],
    urlFilter: function (url) {
        return url.indexOf(websiteUrl) === 0;
    },
    recursive: true,
    maxDepth: 50,
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure',
    directory: 'G:/node js api/1NodeJsTopics/eduschool/'
}).then((data) => {
    console.log("Entire website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});