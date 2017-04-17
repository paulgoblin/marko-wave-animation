$_mod.def("/marko-animate$1.0.0/components/point.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = {
        onInput: function(input) {
          this.state = makePoint(input);
        }
      },
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-animate$1.0.0/components/point.marko", function() {
      return module.exports;
    }),
    marko_styleAttr = require('/marko$4.2.8/runtime/vdom/helper-styleAttr'/*"marko/runtime/vdom/helper-styleAttr"*/);

function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var args = slice.call(arguments);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(this, args));

  }
};

function mod(n, m) {
  return ((n % m) + m) % m;
};

function getYPos({ index, numPoints, amplitude, wavelength, period, time }) {
  const spatialArg = (index/numPoints)/wavelength;
  const temporalArg = time/period;
  return amplitude * Math.sin(2*Math.PI * (spatialArg + temporalArg)) + 50;
};

function getXPos({ index, numPoints }) {
  return index/numPoints * 100
};

const colorTransitionCurve = memoize((stepNum) => {
  const segment = Math.floor(stepNum / 256);
  switch (segment) {
    case 0:
      return mod(stepNum, 256);
    case 1:
      return 256;
    case 2:
      return 256;
    case 3:
      return 256 - mod(stepNum, 256);
    case 4:
      return 0;
    case 5:
      return 0;
  }
});

function getColor({ index, numPoints, time }) {
  const stepNum = Math.floor(index/numPoints * 1536 - time/4);
  return [
    colorTransitionCurve(mod(stepNum + 1024, 1536)),  // red
    colorTransitionCurve(mod(stepNum, 1536)),         // blue
    colorTransitionCurve(mod(stepNum + 512, 1536)),   // green
  ]
};

function getRotation({ index, numPoints, time }) {
  return mod(Math.floor(index/numPoints * 90 + time/100), 360);
};

function makePoint(input) {
  const { index, isJuicy } = input;
  const point = { index: input.index };

  point.style = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'blue,'
  };

  if (isJuicy) {
    const color = getColor(input);
    const rotation = getRotation(input);
    point.style = {
      width: '7px',
      height: '80px',
      transform: 'rotate(' + rotation + 'deg)',
      background: 'rgb(' + color.join(',') + ')',
    }
  }

  const yPos = getYPos(input);
  const xPos = getXPos(input);
  point.style.top = yPos + '%';
  point.style.left = xPos + '%';

  return point;
};

function render(input, out, __component, component, state) {
  var data = input;

  out.e("DIV", {
      style: marko_styleAttr(state.style),
      "class": "point",
      id: __component.id
    }, 0, 4);
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});