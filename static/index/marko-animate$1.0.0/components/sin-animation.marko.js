$_mod.def("/marko-animate$1.0.0/components/sin-animation.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    point_template = require('/marko-animate$1.0.0/components/point.marko'/*"./point.marko"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    point_tag = marko_loadTag(point_template),
    marko_attrs0 = {
        "class": "container"
      };

function render(input, out) {
  var data = input;

  out.be("DIV", marko_attrs0);

  for (var i = 0; i <= input.numPoints; i++) {
    point_tag({
        index: i,
        numPoints: input.numPoints,
        wavelength: input.wavelength / 100,
        amplitude: input.amplitude,
        period: input.period,
        time: input.time,
        isJuicy: input.isJuicy
      }, out);
  }

  out.ee();
}

marko_template._ = render;

});