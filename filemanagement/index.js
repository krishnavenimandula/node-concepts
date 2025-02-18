require("dotenv").config();

const fs = require("fs");

console.log(process.env);

// procee gives access to all environment values

function writelogFile(data) {
  fs.writeFileSync("server-log.txt", data, () => {
    console.log("Error added to the log!");
  });
}

function readingFile() {
  try {
    const errorData = fs.readFileSync("server-log.txt");
    console.log(errorData.toString());
  } catch {
    writelogFile(Date.now().toLocaleString() + "- File not found");
  }
}

readingFile();
