const usersUrl = `https://api.github.com/users`;

async function readDataFromRemote(url) {
    const response = await fetch(usersUrl);
    const data = await response.json();
    return data;
}

// Opening/Creating a file to write data;
async function createFile(name) {
    const fs = require("fs");
    const writeStream = fs.createWriteStream(name);
    return writeStream;
}

async function closeFile (stream) {
    stream.end();
}

async function writeDataToFile (stream, data) {
    stream.write(JSON.stringify(data));
}

async function fetchAndCacheApiData () {
    const users = await readDataFromRemote(usersUrl);
    // Missing SRP // Refactor
    /**
        loop over all users 
        store their responses
    */
    for (let user of users) {
        const {repos_url, login } = user;
        console.log({repos_url, login});
        // const data = await readDataFromRemote(repos_url);
        // const stream = await createFile(`${login}.json`);
        // await writeDataToFile(stream, data);
        // await closeFile(stream);
        // console.log(`${login}.json created`);
    }
}
fetchAndCacheApiData();