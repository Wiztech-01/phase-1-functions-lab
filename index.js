// Code your solution in this file!
function distanceFromHqInBlocks(capital) {
    const headquarters = 42
    return Math.abs(capital - headquarters);
}
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(street) {
    if(street<42) {
        return(42 - street);
}

    else {
         return(street - 42);
    }
console.log(distanceFromHqInFeet);


function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

