/*
Chess board
Write a program that creates a string that represents an 8 × 8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a “#” character. The characters should form a chess
board.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
When you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size , outputting
a grid of the given width and height.
*/

var count = 8;
var line;
var space = true;
for (j = 0; j < count; j++) {
    for (i = 0; i < count; i++) {
        if (space) {
            line += " ";
            space = false;
        } else {
            line += "#";
            space = true;
        }
    }
    console.log(line);
    line = "";
}