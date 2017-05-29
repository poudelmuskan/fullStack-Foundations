/*
The sum of a range
The introduction of this book alluded to the following as a nice way to
compute the sum of a range of numbers:
console . log ( sum ( range (1 , 10) ));
Write a range function that takes two arguments, start and end , and
returns an array containing all the numbers from start up to (and in-
cluding) end .
Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the previous program and see whether
it does indeed return 55.
As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used to build up the
array. If no step is given, the array elements go up by increments of
one, corresponding to the old behavior. The function call range(1, 10, 2)
should return [1, 3, 5, 7, 9] . Make sure it also works with negative step
values so that range(5, 2, -1) produces [5, 4, 3, 2] .
*/

//takes two values and returns array
//increment is set to 1 by default
function range(beginning, ending) {
    var numArray = [];  //declaring array
    for (beginning; beginning <= ending; beginning++) {
        numArray.push(beginning);
    }
    return numArray;
}

console.log(range(1, 10));

//range and sum
function rangeAndSum(rangefunc) {
    var total = 0;
    for (var i = 0; i < rangefunc.length; i++) {
        total += rangefunc[i];
    }
    console.log(total);
}

console.log(rangeAndSum(range(1, 2)));


/*
increment is user defined
increment can be ascending or descending
*/
function range(beginning, ending, increment) {
    var numArray = [];  //declaring array

    //if increment value is not provided
    if (increment == undefined) {
        increment = 1;
    }

    //if increment value is negative
    if (increment < 0 && beginning > ending) {
        for (beginning; beginning >= ending; beginning = beginning + increment) {
            numArray.push(beginning);
        };
    } else if (increment > 0 && beginning < ending) {
        for (beginning; beginning <= ending; beginning = beginning + increment) {
            numArray.push(beginning);
        }
    } else {
        console.log("are you nuts");
    }
    return numArray;
}

console.log(range(1, 10, 2));

