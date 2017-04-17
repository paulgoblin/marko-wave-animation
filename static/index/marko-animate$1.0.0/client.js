$_mod.def("/marko-animate$1.0.0/client", function(require, exports, module, __filename, __dirname) { var app = require('/marko-animate$1.0.0/components/app.marko'/*'./components/app'*/);
 
app.render({}, (err, result) => {
  result.appendTo(document.body);
})

});