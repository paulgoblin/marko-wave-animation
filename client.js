var app = require('./components/app');
 
app.render({}, (err, result) => {
  result.appendTo(document.body);
})
