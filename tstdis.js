function rainDance(arr)
{
    let ans =[];
    for(let i =0; i<arr.length;i++)
    {
        let obj = {};
        obj.name = arr[i].name;
        let sum = 0;
        let rainfallarr= arr[i].rainfall;
        for(let j=0;j<rainfallarr.length;j++)
        {
            sum+=rainfallarr[j];
        }
        let avg = sum/rainfallarr.length;
        obj.avg=avg;
        ans.push(obj);

    }
    return ans;

}

console.log(
    rainDance([
        {name: "delhi", rainfall: [2,3,4,3.1,5.5,1.1,1.2]}
    ])
)