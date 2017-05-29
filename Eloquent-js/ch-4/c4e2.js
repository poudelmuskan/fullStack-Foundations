/*
Reversing an array
Arrays have a method reverse , which changes the array by inverting the
order in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace . The first, reverseArray , takes an array
as argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace , does what the reverse
method does: it modifies the array given as argument in order to reverse
its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in
the previous chapter, which variant do you expect to be useful in more
situations? Which one is more efficient?
*/

function reverseArray(arrayParam) {
    var newArrayParam = [];
    for (i = 0; i < arrayParam.length; i++) {
        newArrayParam.unshift(arrayParam[i]);
    }
    return newArrayParam;
}

var a = ["a", "b", "c"];
console.log(reverseArray(a));
//or
//console.log(reverseArray(["a", "b", "c"]));
//same thing



/*
2nd part
reversing array without using another array
*/

function reverseArray(arrayParam) {
    var initArrayLength = arrayParam.length ;
    var count = arrayParam.length - 1;
    for (count; count >= 0; count--) {
        var lastchar = arrayParam[count];
        //    arrayParam.pop();
        arrayParam.push(lastchar);
    }
    console.log(arrayParam);
    console.log
    return arrayParam.slice(initArrayLength, arrayParam.length);
}

console.log(reverseArray(["a", "b", "c"]));