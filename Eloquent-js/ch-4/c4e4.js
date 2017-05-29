/*
Deep comparison
The == operator compares objects by identity. But sometimes, you would
prefer to compare the values of their actual properties.
Write a function, deepEqual , that takes two values and returns true only
if they are the same value or are objects with the same properties whose
values are also equal when compared with a recursive call to deepEqual .
To find out whether to compare two things by identity (use the ===
operator for that) or by looking at their properties, you can use the
typeof operator. If it produces "object" for both values, you should do a
deep comparison. But you have to take one silly exception into account:
by a historical accident, typeof null also produces "object" .
*/

function deepComparison(elementOne, elementTwo) {

    if (elementOne == null || elementTwo == null) {
        console.log("Please, lets not put null over here...shall we... :D");
        return false;
    }

    if (typeof elementOne == typeof elementTwo) {
        //further comparision
        //if elements are objects
        if (typeof elementOne == "object") {
            for (var prop in elementOne) {
                if (elementOne[prop] != elementTwo[prop]) {
                    return false;
                } else {
                    console.log("element one ", elementOne[prop], "element two ", elementTwo[prop]);
                }
            }
        } else { //if elements are other than objects
            if (elementOne == elementTwo) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }

    return true;

}

var a = [1, 2, 3];
var b = [1, 2, 3];

console.log(deepComparison(a, b));