const fs = require("fs");

const usersUrl = `https://api.github.com/users`;
async function fnName() {
    const writeStream = fs.createWriteStream("./users.txt");
    const response = await fetch(usersUrl);
    const data = await response.json();

    writeStream.write(JSON.stringify(data));
    // writeStream.write("Thank You.");
    writeStream.end();
    // console.log('data captured successfully! ', data);
};
fnName();