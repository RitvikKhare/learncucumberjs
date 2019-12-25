//function to print fibonacci 

// Type 1 : 
class fibonacci {

constructor(){
    
};

  
printFibSeriesTypeB(){
// Type 2 : Layman terms
var firstnum=0;
var secondnum=1;
var thirdnum=0;
console.log("- - - - - - Fibonnaci Series Printing - - - - - -")
console.log(firstnum + "  | " + secondnum) ;
for(var icnt1=1;icnt1<10;icnt1++)
{
    thirdnum=firstnum+secondnum;
    firstnum = secondnum;
    secondnum = thirdnum;
    console.log(" | " + thirdnum);

};

}
}