'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '详情 '
    }, _this.data = {
      usetime: 'unknow',
      whichclass: 'unknow',
      target: false,
      devote: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      console.log(option);
      var self = this;
      console.log(option.target);
      self.src = option.target;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/details'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInVzZXRpbWUiLCJ3aGljaGNsYXNzIiwidGFyZ2V0IiwiZGV2b3RlIiwibWV0aG9kcyIsIm9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzZWxmIiwic3JjIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsUUFESjtBQUVMQyxrQkFBWSxRQUZQO0FBR0xDLGNBQVEsS0FISDtBQUlMQyxjQUFRO0FBSkgsSyxRQU1QQyxPLEdBQVUsRTs7Ozs7MkJBQ0hDLE0sRUFBUTtBQUNiQyxjQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxVQUFJRyxPQUFPLElBQVg7QUFDQUYsY0FBUUMsR0FBUixDQUFZRixPQUFPSCxNQUFuQjtBQUNBTSxXQUFLQyxHQUFMLEdBQVdKLE9BQU9ILE1BQWxCO0FBQ0Q7Ozs7RUFoQmdDLGVBQUtRLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJkZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ivpuaDhSAnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB1c2V0aW1lOiAndW5rbm93JyxcbiAgICB3aGljaGNsYXNzOiAndW5rbm93JyxcbiAgICB0YXJnZXQ6IGZhbHNlLFxuICAgIGRldm90ZTogJydcbiAgfVxuICBtZXRob2RzID0ge31cbiAgb25Mb2FkKG9wdGlvbikge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbilcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBjb25zb2xlLmxvZyhvcHRpb24udGFyZ2V0KVxuICAgIHNlbGYuc3JjID0gb3B0aW9uLnRhcmdldFxuICB9XG59XG4iXX0=