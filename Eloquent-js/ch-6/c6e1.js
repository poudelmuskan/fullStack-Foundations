/*
A vector type
Write a constructor Vector that represents a vector in two-dimensional
space. It takes x and y parameters (numbers), which it should save to
properties of the same name.
Give the Vector prototype two methods, plus and minus , that take an-
other vector as a parameter and return a new vector that has the sum
or difference of the two vectors’ (the one in this and the parameter) x
and y values.
Add a getter property length to the prototype that computes the length
of the vector—that is, the distance of the point (x, y) from the origin (0,
0).
*/
function vector(x, y) {
    //storing variables under same name
    this.store = [];
    store = [x, y];

}

vector.prototype.plus = function () {
    return store[0] + store[1];
}

vector.prototype.minus = function () {
    return store[1] - store[0];
}

vector.prototype.getDistance = function () {
    var x1 = 0;
    var x2 = store[0];
    var y1 = 0;
    var y2 = store[1];

    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}


var vec1 = new vector(2, 4);
var vec2 = new vector(3, 5);

vec1.plus();
vec1.minus();
vec1.getDistance();
vec2.plus();
vec2.minus();
vec2.getDistance();



function person(name, age) {
    //"this"" keyword is necessary here
    this.name = name;
    this.age = age;
    this.getDetail = function(){
        return this.name+" "+this.age;
    }
}

var p1 = new person("Ram", 22);
p1.getDetail();
