const express = require('express');
const app = express();
var path = require('path');

app.use(express.static('build'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});
