const fs = require("fs");

// (module to write a file)
// fs.writeFile("message.txt" , "Hello there!!", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });


// (module to read a file)
fs.readFile("./message.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log(data);
      });