var C1 = /** @class */ (function () {
    function C1(a, b, x, y) {
        if (a === void 0) { a = 0; }
        if (b === void 0) { b = 0; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }
    C1.prototype.sub = function () {
        return this.x - this.y;
    };
    C1.prototype.sum = function () {
        return this.a + this.b;
    };
    return C1;
}());
var impC = new C1(1, 2, 3, 4);
console.log("sum: " + impC.sum());
console.log("sub: " + impC.sub());
