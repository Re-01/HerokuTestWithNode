const express = require('express');
const path = require('path');

// heroku assigns a port when it deploys via the process (environment variables - coming
// locally this will run @ port 3000; remotely it will run wherever heroku tells it to run)
const port = process.env.PORT || 3000; // a double pipe means "or"

const app = express();

app.use(express.static('public'));


// a foward slash is the home rout
app.get('/', (req,res) => {
  console.log('at the home route');
  res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/contact', (req,res) => {
  console.log('at the contact route');
  res.sendFile(path.join(__dirname + '/views/contact.html'));
})

app.get('/portfolio', (req,res) => {
  console.log('at the portfolio route');
  res.sendFile(path.join(__dirname + '/views/portfolio.html'));
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});