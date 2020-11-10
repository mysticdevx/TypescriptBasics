// to import
// import{name} from "location without extension"

import{x} from "./module_test1_export"
console.log(x);

import{myfunc} from "./module_test1_export"
myfunc();

import {myclass} from "./module_test1_export"
var c=new myclass(10,20);
console.log(c.add());


// to import and export during the compilation, we need to use commonjs
//tsc --module commonjs ts_file_name