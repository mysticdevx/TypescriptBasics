// normally all the variables, functions, classes, 
//interfaces are available throughout the project.

//when we add export then they are no more global. 
// to use them wee need to import


//variable
export var x:string="welcome";


//simplefunction
export function myfunc():void{
    console.log("This is smy function...");
}

//class
export class myclass
{
    a:number;
    b:number;
    constructor(a:number,b:number)
    {
        this.a=a;
        this.b=b;
    }

    add=()=>
    {
        return(this.a+this.b);
    }

}


// to import and export during the compilation, we need to use commonjs
//tsc --module commonjs ts_file_name