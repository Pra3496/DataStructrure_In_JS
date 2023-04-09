// Array Practice Problems
//uc1
let arrayRandomNo=new Array();
for(i =0;i<10;i++)
{
    let ramdomNo=(Math.floor(Math.random() * 900)+100);
    arrayRandomNo.push(ramdomNo);
}
console.log(arrayRandomNo);

//uc2
arrayRandomNo.sort();
console.log(arrayRandomNo);

console.log("Second largest no: "+ arrayRandomNo[8]);
console.log("Second smallest no: "+ arrayRandomNo[1]);

//UC4

for(let i=-9;i<10;i++)
{
    for(let j=i;j<10;j++)
    {
        for(let k=j;k<10;k++)
        {
            if(0 === i+j+k)
            {
                console.log(" : "+i+" "+j+" "+k+" == 0");
            }
        }
    }
}

//uc5
let repeatNum = new Array();

for(let i=1;i<100;i++)
{
    let strNum = i.toString();

    if(strNum[0] == strNum[1])
    {
        repeatNum.push(i);
    }
}
console.log(repeatNum);

