const request=require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";



request(link,cb);

function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let hrun = 0;
        let nameofhrun = "";
        let bowlertable = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed ");

        for(let i=0;i<bowlertable.length;i++)
        {
            let row=bowlertable[i].querySelectorAll("tbody tr");
            for(let j=0;j<row.length;j++)
            {
                let tds = row[j].querySelectorAll("td");
                if(tds.length>5)
                {
                    let name = tds[0].textContent;
                    let run = tds[3].textContent;
                    console.log("name of----->",name,"     run------->",run);
                    if(run>hrun)
                    {
                        hrun = run;
                        nameofhrun = name;
                    }

                }

            }
            
        }

        console.log("name of hrun ",nameofhrun);
        console.log("number of runs",hrun);
    

        

    }
}