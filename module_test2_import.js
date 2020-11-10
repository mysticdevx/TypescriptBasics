"use strict";
// to import
// import{name} from "location without extension"
Object.defineProperty(exports, "__esModule", { value: true });
var module_test1_export_1 = require("./module_test1_export");
console.log(module_test1_export_1.x);
var module_test1_export_2 = require("./module_test1_export");
module_test1_export_2.myfunc();
var module_test1_export_3 = require("./module_test1_export");
var c = new module_test1_export_3.myclass(10, 20);
console.log(c.add());
// to import and export during the compilation, we need to use commonjs
//tsc --module commonjs ts_file_name
