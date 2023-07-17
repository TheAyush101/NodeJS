const fs = require('fs');

fs.readFile('file.txt','utf8',(err,data)=>{
console.log(err,data)
})
console.log("finished reading")

//while using readFile, file is read and in the mean time further process is continued
// but in below case, while using readFileSync, file is read first and further process is blocked intentionally.

const a = fs.readFileSync("file.txt");
console.log(a);
console.log(a.toString())


fs.writeFile('file2.txt',"im good",()=>{
    console.log("written to the file")
})

b = fs.writeFileSync("file2.txt", "im good2");
console.log(b)

console.log("finished reading");