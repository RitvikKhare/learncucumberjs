function fiboPrint(num:number){

    var series:number[]=new Array(num+2);
    let cnt:number;

    series[0]=0;
    series[1]=1;

    for(cnt=2;cnt<num;cnt++)
    {
        series[cnt]=series[cnt-1]+series[cnt-2];
    }

return series;
}

console.log(fiboPrint(10));