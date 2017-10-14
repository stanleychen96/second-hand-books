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
        _wepy2.default.navigateTo({
          url: './user?data=1&a=2'
        });
      },
      tap: function tap() {
        _wepy2.default.navigateTo({
          url: './user'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZC1oYW5kLWJvb2tzLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXRsZSIsIndlbGNvbWUiLCJpbWd0aXRsZSIsIm1ldGhvZHMiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGFwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGFBQU8sTUFERjtBQUVMQyxlQUFTLEVBRko7QUFHTEMsZ0JBQVU7QUFITCxLLFFBTVBDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ05DLGdCQUFRQyxHQUFSLENBQVksVUFBWjtBQUNELE9BSE87QUFJUkMsWUFKUSxvQkFJQztBQUNQLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BUk87QUFTUkMsU0FUUSxpQkFTRjtBQUNKLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBYk8sSzs7Ozs7NkJBZ0JELENBQ1I7Ozs7RUE1QmdDLGVBQUtFLEk7O2tCQUFuQmYsSyIsImZpbGUiOiJzZWNvbmQtaGFuZC1ib29rcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuozmiYvkuabotYTmupDlubPlj7AnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHRpdGxlOiAn55m75YWl6K6k6K+BJyxcbiAgICB3ZWxjb21lOiAnJyxcbiAgICBpbWd0aXRsZTogJy4uL2ltYWdlcy9XZWNoYXRJTUcxNjUuanBlZydcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgbG9naW4oKSB7XG4gICAgICBjb25zb2xlLmxvZygn552h6KeJ5ZCn77yM54uX5ZG95rKh5LqGJylcbiAgICB9LFxuICAgIGJ1dHRvbigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vdXNlcj9kYXRhPTEmYT0yJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHRhcCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vdXNlcidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICB9XG59XG5cbiJdfQ==