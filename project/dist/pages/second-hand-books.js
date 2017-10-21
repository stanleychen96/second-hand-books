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
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      setTimeout(function () {
        _wepy2.default.stopPullDownRefresh();
      }, 1000);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/second-hand-books'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZC1oYW5kLWJvb2tzLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXRsZSIsIndlbGNvbWUiLCJpbWd0aXRsZSIsIm1ldGhvZHMiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGFwIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTyxNQURGO0FBRUxDLGVBQVMsRUFGSjtBQUdMQyxnQkFBVTtBQUhMLEssUUFNUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTkMsZ0JBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0QsT0FITztBQUlSQyxZQUpRLG9CQUlDO0FBQ1BGLGdCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLHVCQUFLRSxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdBSixnQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRCxPQVZPO0FBV1JJLFNBWFEsaUJBV0Y7QUFDSix1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQWZPLEs7Ozs7OzZCQWtCRCxDQUNSOzs7d0NBQ21CO0FBQ2xCRSxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUFuQ2dDLGVBQUtDLEk7O2tCQUFuQmpCLEsiLCJmaWxlIjoic2Vjb25kLWhhbmQtYm9va3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LqM5omL5Lmm6LWE5rqQ5bmz5Y+wJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB0aXRsZTogJ+eZu+WFpeiupOivgScsXG4gICAgd2VsY29tZTogJycsXG4gICAgaW1ndGl0bGU6ICcuLi9pbWFnZXMvV2VjaGF0SU1HMTY1LmpwZWcnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGxvZ2luKCkge1xuICAgICAgY29uc29sZS5sb2coJ+edoeinieWQp++8jOeLl+WRveayoeS6hicpXG4gICAgfSxcbiAgICBidXR0b24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnLi4xLi4uJylcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3VzZXI/YT0xJ1xuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKCcuLjIuLi4nKVxuICAgIH0sXG4gICAgdGFwKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAndXNlcidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cbn1cblxuIl19