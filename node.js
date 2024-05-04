const { readdir } = require("fs");
const { homedir } = require("os");
const { join } = require("path");

console.log({ node: process.versions.node });

readdir(join(homedir(), "Desktop"), (error, files) => {
    if (error) {
        console.error(`error: ${error}`);
    } else {
        console.log(files);
    }
});
