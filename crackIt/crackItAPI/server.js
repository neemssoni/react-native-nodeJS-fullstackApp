const express = require('express');
const bodyParser = require('body-parser');
const db = require('/Users/neelamsoni/crackIt/crackItAPI/config/database.config.js');
const mongoose = require('mongoose');
const port = 3001;

const app = express();
const content = require('/Users/neelamsoni/crackIt/crackItAPI/app/routes/content.route');

mongoose.Promise = global.Promise;
mongoose.connect(db.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.get('/',(req, res) => {
    res.json({"message" : "Welcome!"});
});
app.use('/contents', content);
app.listen(port, () => {
    console.log("Server is litening on port 3001");
});