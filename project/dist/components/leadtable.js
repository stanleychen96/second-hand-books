'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Leadtable = function (_wepy$component) {
  _inherits(Leadtable, _wepy$component);

  function Leadtable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Leadtable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Leadtable.__proto__ || Object.getPrototypeOf(Leadtable)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      open: {}
    }, _this.methods = {
      like: function like(e) {
        this.$emit('childFn', 100);
        // console.log(e)
        // self.color[e.currentTarget.dataset.comIndex] = 'black'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Leadtable, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      console.log(self.open);
    }
  }]);

  return Leadtable;
}(_wepy2.default.component);

exports.default = Leadtable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWR0YWJsZS5qcyJdLCJuYW1lcyI6WyJMZWFkdGFibGUiLCJwcm9wcyIsIm9wZW4iLCJtZXRob2RzIiwibGlrZSIsImUiLCIkZW1pdCIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBREEsSyxRQUlSQyxPLEdBQVU7QUFDUkMsVUFEUSxnQkFDSEMsQ0FERyxFQUNBO0FBQ04sYUFBS0MsS0FBTCxDQUFXLFNBQVgsRUFBc0IsR0FBdEI7QUFDQTtBQUNBO0FBQ0Q7QUFMTyxLOzs7Ozs2QkFRRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyxjQUFRQyxHQUFSLENBQVlGLEtBQUtMLElBQWpCO0FBQ0Q7Ozs7RUFoQm9DLGVBQUtRLFM7O2tCQUF2QlYsUyIsImZpbGUiOiJsZWFkdGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFkdGFibGUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIG9wZW46IHt9XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGxpa2UoZSkge1xuICAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicsIDEwMClcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgICAvLyBzZWxmLmNvbG9yW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbUluZGV4XSA9ICdibGFjaydcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgY29uc29sZS5sb2coc2VsZi5vcGVuKVxuICB9XG59XG4iXX0=