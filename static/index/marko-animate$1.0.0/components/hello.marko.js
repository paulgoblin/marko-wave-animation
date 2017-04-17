$_mod.def("/marko-animate$1.0.0/components/hello.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t();

function render(input, out) {
  var data = input;

  out.e("H1", null, 3)
    .t("Waddup ")
    .t(input.name)
    .t("?");
}

marko_template._ = render;

});