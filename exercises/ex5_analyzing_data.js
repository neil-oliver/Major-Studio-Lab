/*
  Exercise 5
  Analyzing a dataset
*/

const fs = require("fs");

// Task
// Copy in the function from Exercise 4

// Task
// Replace the console.log statement with new code to determine which class of Iris (a variable in the data) has the longest average petal length
// HINT: Break down the problem into steps
// Don't forget to execute your function

function getIrisData() {
  fs.readFile("./iris_json.json", "utf8", (err, data) => {
    if (err) console.log(err);
    var obj = JSON.parse(data);
    var max = 0;
    var iris;
    obj.forEach(function(item){
      if(item["petallength"] > max){
        max = item["petallength"];
        iris = item["class"];
      };
    });
    console.log("The Iris with the longest petal length is the " + iris)
  });
}

getIrisData();