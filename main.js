const { app } = require("electron");
const { readdir } = require("fs");
const { homedir } = require("os");
const { join } = require("path");
const { electron } = require("process");

app.on("ready", () => {
    console.log({
        electron: process.versions.electron,
        node: process.versions.node,
    });

    readdir(join(homedir(), "Desktop"), (error, files) => {
        if (error) {
            console.error(`error: ${error}`);
        } else {
            console.log(files);
        }
    });
});
