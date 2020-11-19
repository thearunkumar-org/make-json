"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = exports.UsableStylesAttributes = void 0;
var make_html_1 = require("@thearunkumar/make-html");
var UsableStylesAttributes;
(function (UsableStylesAttributes) {
    UsableStylesAttributes["FONT_FAMILY"] = "fontFamily";
    UsableStylesAttributes["FONT_SIZE"] = "fontSize";
    UsableStylesAttributes["COLOR"] = "color";
    UsableStylesAttributes["BACKGROUND"] = "background";
    UsableStylesAttributes["WIDTH"] = "width";
    UsableStylesAttributes["HEIGHT"] = "height";
    UsableStylesAttributes["TOP"] = "top";
    UsableStylesAttributes["LEFT"] = "left";
    UsableStylesAttributes["BORDER"] = "border";
})(UsableStylesAttributes = exports.UsableStylesAttributes || (exports.UsableStylesAttributes = {}));
var Builder = /** @class */ (function () {
    function Builder() {
    }
    Builder.convertToJSON = function (selection) {
        var template = {
            type: make_html_1.HTMLElementType.DIV,
            children: [],
            styles: selection.styles,
            text: selection.display,
        };
        return template;
    };
    Builder.toJSON = function (selections) {
        var inputJson = {
            type: 'resume',
            template: {
                type: make_html_1.HTMLElementType.DIV,
                children: [],
                styles: selections['canvas'].styles,
                text: '',
            },
        };
        var children = inputJson.template.children;
        Object.values(selections).forEach(function (selection) {
            if (selection.type !== 'canvas') {
                children === null || children === void 0 ? void 0 : children.push(Builder.convertToJSON(selection));
            }
        });
        return inputJson;
    };
    return Builder;
}());
exports.Builder = Builder;
