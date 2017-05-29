/*
Minimum
The previous chapter introduced the standard function Math.min that re-
turns its smallest argument. We can do that ourselves now. Write a
function min that takes two arguments and returns their minimum.
 */


//for two variables
var muskan = {
    min: function (a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }
}

muskan.min(2, 3);


//for multiple variables
var muskan = {
    min: function numberOfArgs() {
    var min = arguments[0];
    for (var a = 0; a<arguments.length; a++) {
        if(min>arguments[a]){
            min = arguments[a];
        }
    }
    return min;
}
}

muskan.min(2, 3, 5, 0);


//multiple variables
function numberOfArgs() {
    var min = arguments[0];
    for (var a = 0; a<arguments.length; a++) {
        if(min>arguments[a]){
            min = arguments[a];
        }
    }
    return min;
}

numberOfArgs(22, 3, 4, 51, 6, 7, 8, 9, 10);