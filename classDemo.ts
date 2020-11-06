// create class
class classDemo {
    // properties, methods, constructor
    username: string;
    password: string;
    ssn: number;

    constructor(uname: string, pwd: string, sn: number) {
        console.log("i will execute first, i am the constructor");
        this.username = uname;
        this.password = pwd;
        this.ssn = sn;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    setUsername(uname: string) {
        this.username = uname;
    }

    getSSN() {
        return this.ssn;
    }

}

//create object from class and use properties
let classObject = new classDemo("my username before", "my password", 123);
console.log("user name before: " + classObject.getUsername());
classObject.setUsername("my username after");
console.log("user name after: " + classObject.getUsername());
console.log("pass: " + classObject.getPassword());
console.log("ssn: " + classObject.getSSN());