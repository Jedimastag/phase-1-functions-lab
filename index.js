function distanceFromHqInBlocks(blocks) {
    if (blocks <= 42) {
        return 42 - blocks;
    } else return blocks - 42
}

function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264);

}

function distanceTravelledInFeet(start, end) {
    return (Math.abs(start - end) * 264);
}

function calculatesFarePrice(start, end){
    let fareDistance = distanceTravelledInFeet(start, end);

    if (fareDistance <= 400){
        return 0;
    } 
    else if (fareDistance >= 400 && fareDistance <= 2000) {
        return (fareDistance -400) * .02;
    }
    else if (fareDistance > 2000 && fareDistance <= 2500) {
        return 25;
    }
    else {
        return "cannot travel that far"
    }
}