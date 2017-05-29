/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by
writing .length after it.
var abc = " abc ";
console . log ( abc . length ) ;
*/



var b = "#######";

for(var i = 1; i<8; i++){
	console.log(b.slice(0,i));
}