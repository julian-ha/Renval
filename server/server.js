const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname , "..", "build")));

const HTML_FILE = path.join(__dirname, "..", "build", "index.html");
console.log(HTML_FILE);

// create a GET route
app.get('/api', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.get('*', (req, res, next) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});