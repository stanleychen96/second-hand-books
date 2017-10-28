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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Leadtable.__proto__ || Object.getPrototypeOf(Leadtable)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '领读'
    }, _this.data = {
      imglike: '../images/thumbsup.png',
      color: '#bfbfbf'
    }, _this.methods = {
      like: function like(e) {
        var self = this;
        console.log(e);
        self.color = '#e09664';
        self.imglike = '../images/afterlike.png';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Leadtable, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Leadtable;
}(_wepy2.default.component);

exports.default = Leadtable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWR0YWJsZS5qcyJdLCJuYW1lcyI6WyJMZWFkdGFibGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZ2xpa2UiLCJjb2xvciIsIm1ldGhvZHMiLCJsaWtlIiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyx3QkFESjtBQUVMQyxhQUFPO0FBRkYsSyxRQUlQQyxPLEdBQVU7QUFDUkMsVUFEUSxnQkFDSEMsQ0FERyxFQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlILENBQVo7QUFDQUMsYUFBS0osS0FBTCxHQUFhLFNBQWI7QUFDQUksYUFBS0wsT0FBTCxHQUFlLHlCQUFmO0FBQ0Q7QUFOTyxLOzs7Ozs2QkFTRCxDQUNSOzs7O0VBbEJvQyxlQUFLUSxTOztrQkFBdkJaLFMiLCJmaWxlIjoibGVhZHRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZHRhYmxlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihuivuydcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZ2xpa2U6ICcuLi9pbWFnZXMvdGh1bWJzdXAucG5nJyxcbiAgICBjb2xvcjogJyNiZmJmYmYnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBsaWtlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIHNlbGYuY29sb3IgPSAnI2UwOTY2NCdcbiAgICAgIHNlbGYuaW1nbGlrZSA9ICcuLi9pbWFnZXMvYWZ0ZXJsaWtlLnBuZydcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==