const express = require('express');
const app = express();

app.use(express.static(__dirname + '/prod-build'));

app.get('*', function(request, response){
  response.sendfile('./prod-build/index.html');
});

// port defaults to 5000 on a local dev environment
app.listen(process.env.PORT || 8080);
