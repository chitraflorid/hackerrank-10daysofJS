/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(arr) {
        this.length = arr;
    }

    perimeter() {
        return this.length.reduce((acc, len) => acc + len, 0);
    }
}
