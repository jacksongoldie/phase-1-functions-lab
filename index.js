// Code your solution in this file!
function distanceFromHqInBlocks(street){
    let blocks;
        if(street >= 42){
            blocks = street - 42;
        }
        else{
            blocks = 42 - street;
        }
    return blocks;
}

//Way to condense ^

//distanceFromHqInFeet
function distanceFromHqInFeet(street){
    return (distanceFromHqInBlocks(street) * 264);
}


function distanceTravelledInFeet(block1, block2){
    let feetTravelled = (block1 > block2) ? (block1 - block2) * 264 : (block2 - block1) * 264;
    return feetTravelled;
}


function calculatesFarePrice(start, destination){
    let cost = 0;
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <=400){
        return cost;
    }
    else if (feet > 400 && feet < 2000) {
        feet = feet - 400;
        cost = feet * .02;
        return cost;
    }
    else if (2000 < feet && feet <= 2500){
        cost = 25;
        return cost;
    }
    else if (feet > 2500){
        return "cannot travel that far";
    }
}