"use strict";
// normally all the variables, functions, classes, 
//interfaces are available throughout the project.
Object.defineProperty(exports, "__esModule", { value: true });
exports.myclass = exports.myfunc = exports.x = void 0;
//when we add export then they are no more global. 
// to use them wee need to import
//variable
exports.x = "welcome";
//simplefunction
function myfunc() {
    console.log("This is smy function...");
}
exports.myfunc = myfunc;
//class
var myclass = /** @class */ (function () {
    function myclass(a, b) {
        var _this = this;
        this.add = function () {
            return (_this.a + _this.b);
        };
        this.a = a;
        this.b = b;
    }
    return myclass;
}());
exports.myclass = myclass;
// to import and export during the compilation, we need to use commonjs
//tsc --module commonjs ts_file_name
