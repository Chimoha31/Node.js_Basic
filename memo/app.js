console.log('app.js稼働開始');

// require()関数→外部ファイルを呼び出すための関数
// const fs = require("fs");
// const os = require("os");

// const notes = require("./notes.js");
// let result = notes.addNote();
// console.log(result);

// let user = os.userInfo();
// // console.log(user);

// // ES6
// fs.appendFile("greeting.txt", "Hello," + user.username + "! You are" + notes.age + "years old", function(err){
//   if(err) {
//     console.log(err);
//   }
// });

const fs = require("fs");
const notes = require("./notes.js");