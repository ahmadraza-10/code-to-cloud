const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
    res.send("This is a simple Node.js project.");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${5000}`);
});