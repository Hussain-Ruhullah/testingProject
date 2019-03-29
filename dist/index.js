"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var App_1 = require("./components/App");
require("./styles/style.scss");
var ROOT = document.querySelector(".container");
ReactDOM.render(React.createElement(App_1.App, null), ROOT);
//# sourceMappingURL=index.js.map