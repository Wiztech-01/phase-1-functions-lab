// Code your solution in this file!
function distanceFromHqInBlocks(capital) {
    const headquarters = 42
    return Math.abs(capital - headquarters);
}
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(capital) {
    const headquarters = 42;
    const NoFeetPerBlock = 264;
    return blocks * NoFeetPerBlock;
}
console.log(distanceFromHqInFeet);
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock,endBlock);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "unable to travel";
    }
}