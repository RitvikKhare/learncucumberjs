"use strict";
function fiboPrint(num) {
    var series = new Array(num + 2);
    var cnt;
    series[0] = 0;
    series[1] = 1;
    for (cnt = 2; cnt < num; cnt++) {
        series[cnt] = series[cnt - 1] + series[cnt - 2];
    }
    return series;
}
console.log(fiboPrint(10));
