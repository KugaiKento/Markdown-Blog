import db from "./service/firebase";

const express = require("express")
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('server is runnning');
})

app.get('/', (req, res) => {
    res.send('こんにちは、えくすぷれす。');
});