function quadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } 
    return 4;

}


console.log(quadrant(6, 10));
console.log(quadrant(9, -13));
