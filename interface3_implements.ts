interface I1 {
    a: number;
    b: number;
    sum(): number;
}

interface I2 extends I1 {
    x: number;
    y: number;
    sub(): number;
}


class C1 implements I2 {

    constructor(a:number=0, b:number=0, x:number=0,y:number=0){
        this.a=a;
        this.b=b;
        this.x=x;
        this.y=y;
    }

    x: number;
    y: number;
    sub(): number {
        return this.x - this.y;
    }
    a: number;
    b: number;
    sum(): number {
        return this.a + this.b;
    }

}

var impC = new C1(1,2,3,4);
console.log("sum: "+impC.sum());
console.log("sub: "+impC.sub());



