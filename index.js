// Code your solution in this file!
/*
function distanceFromHqInBlocks(distance) {
    switch (distance) {
        case blocks < 0:
            return 8;
        case blocks >= 0:
            return blocks;     
        }
}
*/

function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
        return (distance - 42);
    } else if (distance < 42) {
        return 8
    }
 }

function distanceFromHqInFeet(distance) {
    if (distance >= 42) {
        return ((distance - 42) * 264);
    } else if (distance < 42) {
        return 8 * 264
    }  
}

function distanceTravelledInFeet(start, dest) {
    if (start >= 42) {
        return ((start - dest) * 264 * -1);
    } else if (start < 42) {
        return (
            (dest -start) * 264 * -1
        )
    }  
}

function calculatesFarePrice(start, dest) {
    if ((Math.abs(start - dest) * 264) < 400) {
        return 0
    } else if (Math.abs(dest - start) * 264 >= 400 && Math.abs(dest - start) * 264 <= 2000) {
        return (
            ((Math.abs(dest - start) * 264) - 400) * 2/100
        )
    } else if (Math.abs(dest - start) * 264  > 2000 && Math.abs(dest - start) * 264 <= 2500) {
        return (
             25
        )
    } else if (Math.abs(dest - start) * 264 > 2500 ) {
        return 'cannot travel that far'
    }
}


    
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInFeet(50))
console.log(distanceTravelledInFeet(5,20))
console.log(calculatesFarePrice(44,50))