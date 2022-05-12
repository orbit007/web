const request= require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link ="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/mumbai-indians-vs-lucknow-super-giants-26th-match-1304072/full-scorecard";

request(link,cb);

function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        const dom= new JSDOM(html);
        const document= dom.window.document;
        let batsmen= document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table a")
        for(let i=0;i<batsmen.length;i++)
        {
            let batsmenlink=batsmen[i].href;
            let completbmanlink= "https://www.espncricinfo.com"+batsmenlink;
            console.log(completbmanlink);
            request(completbmanlink,cb2);

        }

    }
}
function cb2(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        const dom= new JSDOM(html);
        const document= dom.window.document;
        let batsmendetail= document.querySelectorAll(".ds-p-4 .ds-grid");
        console.log(batsmendetail[0].textContent);
    }
}