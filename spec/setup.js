initBabelRegister();
initJsdom();
initGlobals();
initIgnoreStyles();

function initBabelRegister() {
    require("babel-register")({
        ignore: function(filename) {
            if (/@wix\/.*?\/node_modules/.test(filename))
                return true;
            if (filename.indexOf("@wix") !== -1)
                return false;
            if (filename.indexOf("node_modules") !== -1)
                return true;
            return false;
        },
        "presets": ["react", "es2015", "stage-2"],
        "plugins": ["transform-runtime"]
    });
}

function initIgnoreStyles() {
    require('ignore-styles').default(['.sass', '.scss', '.icss', '.less', '.css']);
}

//required for node testing.
function initJsdom() {
    var jsdom = require('jsdom').jsdom;

    var exposedProperties = ['window', 'navigator', 'document'];

    global.document = jsdom('');
    global.window = document.defaultView;
    Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
            exposedProperties.push(property);
            global[property] =
                document.defaultView[property];
        }
    });

    delete global['XMLHttpRequest'];

    global.navigator = {
        userAgent:
            'node.js'
    };
}

function initGlobals() {
    var _ = require("lodash");
    var React = require("react");
    var ReactDOM = require("react-dom");
    var $ = require("jquery");

    gloabalize("_", _);
    gloabalize("React", React);
    gloabalize("ReactDOM", ReactDOM);
    gloabalize("$", $);
}

function gloabalize(key, value) {
    var windowExists = typeof window !== "undefined";
    var globalExists = typeof GLOBAL !== "undefined";

    if (windowExists)
        window[key] = value;

    if (globalExists)
        GLOBAL[key] = value;
}
