const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs=require("fs"); 
let finalname={};
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
let leader ={};
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

        let alltag = document.querySelectorAll(".ds-flex.ds-mx-4.ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent .ds-inline-flex.ds-items-center.ds-leading-none a");
        
    
        for(let i=0;i<alltag.length;i++)
        {
            if(alltag[i].textContent=="Scorecard")
            {
            
                let batsmen=alltag[i].href;
                let comlinkofdetail = "https://www.espncricinfo.com"+batsmen;
                console.log(comlinkofdetail);
                request(comlinkofdetail,cb2);

            }
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
        let alldetailabout = document.querySelectorAll(".ds-border-b.ds-border-line.ds-text-tight-s");
        
        for(let j=0;j<alldetailabout.length;j++)
        {    
            let finalname=alldetailabout[j].textContent;
            
            console.log(finalname);
            let data =JSON.stringify(finalname);
            fs.writeFileSync("batman.json",data);
            console.log(data);
        }
        
        
        
    
    }
}