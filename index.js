// Code your solution in this file!
function distanceFromHqInBlocks(capital) {
    const headquarters = 42
    return Math.abs(capital - headquarters);
}
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}



function distanceTravelledInFeet(startBlock, endBlock) {
    // const blocks = Math.abs(startBlock - endBlock);
    // const feetPerBlock = 264;
    // return startBlock, endBlock;
    if(startBlock>endBlock) {
        return (startBlock-endBlock) * 264
    }
    return (endBlock-startBlock) * 264
}

function calculatesFarePrice(start , destination) {
    let distance = distanceTravelledInFeet(start,destination);
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
      return "cannot travel that far";
    }
  }