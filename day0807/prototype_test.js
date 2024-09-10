//prototype_test.js

function My(name){
    this.name = name;
}

My.prototype.hello = function() {
    console.log('안녕, 프로토타입!!');
}

const my = new My("나길동");

my.hello();