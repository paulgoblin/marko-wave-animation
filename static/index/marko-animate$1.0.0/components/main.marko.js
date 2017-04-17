$_mod.def("/marko-animate$1.0.0/components/main.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    hello_template = require('/marko-animate$1.0.0/components/hello.marko'/*"./hello.marko"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    hello_tag = marko_loadTag(hello_template),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("9b784a"),
    marko_node0 = marko_createElement("H1", null, 1, 0, {
        c: marko_const_nextId()
      })
      .t("This is Marko!");

function render(input, out) {
  var data = input;

  out.be("DIV");

  out.n(marko_node0);

  hello_tag({}, out);

  out.ee();
}

marko_template._ = render;

});