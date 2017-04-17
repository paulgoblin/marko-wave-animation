$_mod.def("/marko-animate$1.0.0/components/app.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.2.8/vdom'/*"marko/vdom"*/).t(),
    marko_component = ({
    onCreate: function () {
        this.state = {
            numPoints: 85,
            wavelength: 100,
            amplitude: 25,
            period: 3500,
            isJuicy: true,
            isPlaying: false,
            time: 0
        };
    },
    onMount: function () {
        this.startAnimation();
    },
    updateWavelength: function () {
        this.state.wavelength = parseInt(this.getEl('wavelengthInput').value, 10);
    },
    updateNumPoints: function () {
        this.state.numPoints = parseInt(this.getEl('numPointsInput').value, 10);
    },
    updateAmplitude: function () {
        this.state.amplitude = parseInt(this.getEl('amplitudeInput').value, 10);
    },
    updatePeriod: function () {
        this.state.period = parseInt(this.getEl('periodInput').value, 10);
    },
    toggleJucify: function () {
        console.log('JUCIFYING!');
        this.state.isJuicy = !this.state.isJuicy;
    },
    startAnimation: function () {
        this.state.isPlaying = true;
        this.intervalId = setInterval(() => {
            this.state.time += framePeriod;
        }, framePeriod);
    },
    stopAnimation: function () {
        this.state.isPlaying = false;
        clearInterval(this.intervalId);
    }
}),
    marko_components = require('/marko$4.2.8/components/index-browser'/*"marko/components"*/),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-animate$1.0.0/components/app.marko", function() {
      return module.exports;
    }),
    sin_animation_template = require('/marko-animate$1.0.0/components/sin-animation.marko'/*"./sin-animation.marko"*/),
    marko_helpers = require('/marko$4.2.8/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    sin_animation_tag = marko_loadTag(sin_animation_template),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("dbffb2"),
    marko_node0 = marko_createElement("H1", null, 1, 0, {
        c: marko_const_nextId()
      })
      .t("This is Marko!"),
    marko_node1 = marko_createElement("BR", null, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_node2 = marko_createElement("BR", null, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_node3 = marko_createElement("BR", null, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_node4 = marko_createElement("BR", null, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_node5 = marko_createElement("LABEL", null, 1, 0, {
        c: marko_const_nextId()
      })
      .t("Jucify"),
    marko_node6 = marko_createElement("BR", null, 0, 0, {
        c: marko_const_nextId()
      }),
    marko_node7 = marko_createElement("SPAN", null, 1, 0, {
        c: marko_const_nextId()
      })
      .t("✔");

var framePeriod = Math.floor(1000/60);

function render(input, out, __component, component, state) {
  var data = input;

  out.be("DIV", {
      id: __component.id
    }, null, 4);

  out.n(marko_node0);

  out.e("LABEL", {
      "for": __component.elId("numPointsInput")
    }, 1)
    .t("n");

  out.e("INPUT", {
      type: "range",
      max: "300",
      value: state.numPoints,
      id: __component.elId("numPointsInput")
    }, 0, 0, {
      oninput: __component.d("updateNumPoints")
    });

  out.e("SPAN", null, 1)
    .t(state.numPoints);

  out.n(marko_node1);

  out.e("LABEL", {
      "for": __component.elId("wavelengthInput")
    }, 1)
    .t("λ");

  out.e("INPUT", {
      type: "range",
      max: "200",
      min: "1",
      value: state.wavelength,
      id: __component.elId("wavelengthInput")
    }, 0, 0, {
      oninput: __component.d("updateWavelength")
    });

  out.e("SPAN", null, 1)
    .t(state.wavelength / 100);

  out.n(marko_node2);

  out.e("LABEL", {
      "for": __component.elId("amplitudeInput")
    }, 1)
    .t("A");

  out.e("INPUT", {
      type: "range",
      max: "50",
      min: "-50",
      value: state.amplitude,
      id: __component.elId("amplitudeInput")
    }, 0, 0, {
      oninput: __component.d("updateAmplitude")
    });

  out.e("SPAN", null, 1)
    .t(state.amplitude / 50);

  out.n(marko_node3);

  out.e("LABEL", {
      "for": __component.elId("amplitudeInput")
    }, 1)
    .t("T");

  out.e("INPUT", {
      type: "range",
      max: "5000",
      min: "0",
      step: "10",
      value: state.period,
      id: __component.elId("periodInput")
    }, 0, 0, {
      oninput: __component.d("updatePeriod")
    });

  out.e("SPAN", null, 1)
    .t(state.period / 1000);

  out.n(marko_node4);

  out.n(marko_node5);

  out.be("BUTTON", null, null, 0, {
      onclick: __component.d("toggleJucify")
    });

  if (state.isJuicy) {
    out.n(marko_node7);
  }

  out.ee();

  out.n(marko_node6);

  out.e("BUTTON", {
      disabled: state.isPlaying
    }, 1, 0, {
      onclick: __component.d("startAnimation")
    })
    .t("Start");

  out.e("BUTTON", {
      disabled: !state.isPlaying
    }, 1, 0, {
      onclick: __component.d("stopAnimation")
    })
    .t("Stop");

  sin_animation_tag({
      numPoints: state.numPoints,
      wavelength: state.wavelength,
      amplitude: state.amplitude,
      period: state.period,
      time: state.time,
      isJuicy: state.isJuicy
    }, out);

  out.ee();
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

});