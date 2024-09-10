//class_test.js
class My2{
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log('안녕, 클래스!!=>'+ this.name);
    }
}
 const my2 = new My2("너길동");
 my2.hello();