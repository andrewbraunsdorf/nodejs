console.log("hey ninjas");

console.log(__dirname);
console.log(__filename);

var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + " seconds have passed");
    if ( time > 5){
        clearInterval(timer);
    }
}, 2000);


// setTimeout(function(){
//     console.log("3 seconds have passed")
// }, 3000);


// var fs = require('fs');

// var file = fs.readFile('input.txt','utf8',function(err,data){
//     fs.writeFile('writeme.txt',data);
//     console.log(data);
// });

// console.log('This is an instruction outside the sync file system.');