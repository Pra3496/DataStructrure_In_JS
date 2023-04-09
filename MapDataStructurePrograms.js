// Map Practice Problems

//UC1
//UC1.A Roll a die and find the number between 1 to 6
let die = (Math.floor(Math.random() * 10)%6)+1;
console.log(die);

//UC1.B Repeat the Die roll and find the result each time
let dieMap = new Map();
for(let i =0; i<10;i++)
{
    let die = (Math.floor(Math.random() * 10)%6)+1;
    console.log(die);
    //UC1.C Store the result in a dictionary
    dieMap.set(die,die);
}
console.log(dieMap);

// UC1.d Repeat till any one of the number has reached 10 times
let dieMapByCount = new Map();
let oneCount=0;
let twoCount=0;
let threeCount=0;
let fourCount=0;
let fiveCount=0;
let sixCount=0;
while(oneCount<10 && twoCount <10 && threeCount <10 && fourCount <10 && fiveCount<10 && sixCount<10 )
{
    let die = (Math.floor(Math.random() * 10)%6)+1;
    console.log(die);
    //UC1.C Store the result in a dictionary
    switch(die)
    {
        case 1: oneCount++; break;
        case 2: twoCount++; break;
        case 3: threeCount++; break;
        case 4: fourCount++; break;
        case 5: fiveCount++; break;
        case 6: sixCount++; break;
    }
}
console.log("die 1: "+ oneCount);
console.log("die 2: "+ twoCount);
console.log("die 3: "+ threeCount);
console.log("die 4: "+ fourCount);
console.log("die 5: "+ fiveCount);
console.log("die 6: "+ sixCount);