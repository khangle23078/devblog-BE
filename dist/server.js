"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var PORT = process.env.PORT || 5001;
_app["default"].listen(PORT, function () {
  console.log("Server is running on PORT ".concat(PORT));
});