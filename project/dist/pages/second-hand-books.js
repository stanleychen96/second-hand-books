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
      navigationBarTitleText: '二手书资源平台'
    }, _this.data = {
      title: '登入认证',
      welcome: '',
      imgtitle: '../images/WechatIMG165.jpeg'
    }, _this.methods = {
      login: function login() {
        console.log('睡觉吧，狗命没了');
      },
      button: function button() {
        console.log('..1...');
        _wepy2.default.navigateTo({
          url: 'user?a=1'
        });
        console.log('..2...');
      },
      tap: function tap() {
        _wepy2.default.navigateTo({
          url: 'user'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/second-hand-books'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZC1oYW5kLWJvb2tzLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXRsZSIsIndlbGNvbWUiLCJpbWd0aXRsZSIsIm1ldGhvZHMiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGFwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGFBQU8sTUFERjtBQUVMQyxlQUFTLEVBRko7QUFHTEMsZ0JBQVU7QUFITCxLLFFBTVBDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ05DLGdCQUFRQyxHQUFSLENBQVksVUFBWjtBQUNELE9BSE87QUFJUkMsWUFKUSxvQkFJQztBQUNQRixnQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSx1QkFBS0UsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHQUosZ0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsT0FWTztBQVdSSSxTQVhRLGlCQVdGO0FBQ0osdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFmTyxLOzs7Ozs2QkFrQkQsQ0FDUjs7OztFQTlCZ0MsZUFBS0UsSTs7a0JBQW5CZixLIiwiZmlsZSI6InNlY29uZC1oYW5kLWJvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S6jOaJi+S5pui1hOa6kOW5s+WPsCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdGl0bGU6ICfnmbvlhaXorqTor4EnLFxuICAgIHdlbGNvbWU6ICcnLFxuICAgIGltZ3RpdGxlOiAnLi4vaW1hZ2VzL1dlY2hhdElNRzE2NS5qcGVnJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBsb2dpbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfnnaHop4nlkKfvvIzni5flkb3msqHkuoYnKVxuICAgIH0sXG4gICAgYnV0dG9uKCkge1xuICAgICAgY29uc29sZS5sb2coJy4uMS4uLicpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICd1c2VyP2E9MSdcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnLi4yLi4uJylcbiAgICB9LFxuICAgIHRhcCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3VzZXInXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgfVxufVxuXG4iXX0=