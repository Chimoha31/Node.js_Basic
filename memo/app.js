console.log('app.js稼働開始');

// require()関数→外部ファイルを呼び出すための関数
const fs = require("fs");

// ES6
fs.appendFile("greeting.txt", "Hello, World", function(err){
  if(err) {
    console.log(err);
  }
});
