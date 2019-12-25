function sampleadd(para1, para2){
    return para1+para2;
}
console.log(sampleadd("Functions Output Starts"," ---- "));

console.log(sampleadd(5,6));
console.log(sampleadd("s","f"));
console.log(sampleadd("s",2));

console.log(sampleadd("Function Output End"," ---- "));

//arrays
console.log(sampleadd("Array Output Starts"," ---- "));
var barray = [5,4,3,3,'3',"3fs"];

for(var icnt=0;icnt<barray.length;icnt++)
{
    console.log(barray[icnt]);
}

var newarray = new Array();

newarray[0]='sdf';
newarray[1]=12;
newarray[4]=443;
console.log(sampleadd("Array Output New Array"," ---- "));
for(var icnt=0;icnt<newarray.length;icnt++)
{
    console.log(newarray[icnt]);
}

console.log(sampleadd("Array Output End"," ---- "));

console.log(sampleadd("String functions Starts"," ---- "));
var stringVar = "abcefgh";
console.log(stringVar.charAt(2));
console.log(stringVar.charAt(2).concat(" new string attached"));
console.log(stringVar.indexOf("b") + " || " + stringVar.indexOf(2));
console.log(stringVar.slice(1,4));// slice is 1 is inclusive , 4 is exclusive.
console.log(stringVar.toUpperCase());

console.log ("New Section for output testing ------- ");

function fibNumberInSeries(numb)
{
    if(numb<=1)
    return numb;
    
    return ( fibNumberInSeries(numb-1) + fibNumberInSeries(numb-2) );
    };

var numbglobal = 3;
console.log(fibNumberInSeries(numbglobal) + " is the " + numbglobal  + " nd/th in the Fibonnaci Series" );

for (var c=1;c<10;c++)
{
    console.log( fibNumberInSeries(c-1) ); 
}
