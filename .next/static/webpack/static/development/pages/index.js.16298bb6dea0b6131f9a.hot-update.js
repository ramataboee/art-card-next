webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SummaryCard.js":
/*!***********************************!*\
  !*** ./components/SummaryCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SummaryCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    //background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 8,
    border: 0,
    padding: "0 30px",
    boxShadow: "0 15px 25px -10px rgba(0,0,0,.1)"
  },
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
});
function SummaryCard(_ref) {
  var itemdata = _ref.itemdata;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    classes: {
      root: classes.root // class name, e.g. `classes-nesting-root-x`

    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5",
    component: "h2"
  }, itemdata.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    component: "p"
  }, "well meaning and kindly.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), '"a benevolent smile"'))));
}
/*const SummaryCard = ({ item }) => (
  <li>
    <Card className="card">
      <CardContent>
        <Typography variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
    <style jsx>{`
      card {
        width: 275px;
        box-shadow: 0 20px 20px 0 #000;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </li>
);*/
//export default SummaryCard;

/***/ })

})
//# sourceMappingURL=index.js.16298bb6dea0b6131f9a.hot-update.js.map