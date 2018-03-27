const express = require('express');
const app = express();

app.use(express.static(__dirname + '/prod-build'));
app.get('*', function(request, response){
  response.sendfile('./prod-build/index.html');
});
let port = process.env.PORT || 8080;
console.log(port);
app.listen(process.env.PORT || 8080);
