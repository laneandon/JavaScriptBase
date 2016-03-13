
//{
//    let a=15;
//    var b=13;
//}
//console.log(a,b);

//for(let i=0;i<5;i++){
//
//}
//console.log(i);

//提升
//function f(){
//    console.log(a);
//    let a=12;
//}
//f();


//区域性死区
//var a=12;
//function f(){
//    console.log(a);
//    let a;
//}
//f();


//代替立即执行函数
//var config =(function(){
//    var config ={};
//    config.push(1);
//    config.push(2);
//    config.push(3);
//})();
//
//let config;
//{
//    config={};
//    config.push(1);
//    config.push(2);
//    config.push(3);
//}


//实际的例子
//var arr=[];
//function f(){
//    for(var i=0;i<5;i++){
//        arr.push(function(){
//            console.log(i);
//        })
//    }
//}
//f();
//arr[2]();

'use strict'
var arr=[];
function f(){
    for(let i=0;i<5;i++){
        arr.push(function(){
            console.log(i);
        })
    }
}
f();
arr[2]();



