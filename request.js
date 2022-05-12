const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/rajasthan-royals-vs-gujarat-titans-24th-match-1304070/live-cricket-score"

request(link,cb); 
  function cb(error, response, body){
     if(error)  
          console.error('error:', error); // Print the error if one occurred
     else{
        
        const dom = new JSDOM(body);
        const document = dom.window.document;
        let team = document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title span")
        console.log(team[0].textContent)



  }
};