'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _content = require('./../util/content.js');

var _content2 = _interopRequireDefault(_content);

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
      navigationBarTitleText: ''
    }, _this.data = {
      box: [],
      left: '../images/Weanimal.jpeg',
      right: '../images/Weworld.jpeg',
      QRcode: '../images/scanCode.png'
    }, _this.methods = {
      scancode: function scancode() {
        _wepy2.default.scanCode({
          success: function success(res) {
            console.log(res);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.box = _content2.default;
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      setTimeout(function () {
        _wepy2.default.stopPullDownRefresh();
      }, 1000);
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: '自定义转发标题',
        path: '/page/user?id=123',
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/collection'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImJveCIsImxlZnQiLCJyaWdodCIsIlFSY29kZSIsIm1ldGhvZHMiLCJzY2FuY29kZSIsInNjYW5Db2RlIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZWxmIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJmcm9tIiwidGFyZ2V0IiwidGl0bGUiLCJwYXRoIiwiZmFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxZQUFNLHlCQUZEO0FBR0xDLGFBQU8sd0JBSEY7QUFJTEMsY0FBUTtBQUpILEssUUFPUEMsTyxHQUFVO0FBQ1JDLGNBRFEsc0JBQ0c7QUFDVCx1QkFBS0MsUUFBTCxDQUFjO0FBQ1pDLG1CQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJDLG9CQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUhXLFNBQWQ7QUFLRDtBQVBPLEs7Ozs7OzZCQVVEO0FBQ1AsVUFBSUcsT0FBTyxJQUFYO0FBQ0FBLFdBQUtYLEdBQUw7QUFDRDs7O3dDQUNtQjtBQUNsQlksaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7c0NBQ2lCTCxHLEVBQUs7QUFDckIsVUFBSUEsSUFBSU0sSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCO0FBQ0FMLGdCQUFRQyxHQUFSLENBQVlGLElBQUlPLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xDLGVBQU8sU0FERjtBQUVMQyxjQUFNLG1CQUZEO0FBR0xWLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDRCxTQUxJO0FBTUxVLGNBQU0sY0FBU1YsR0FBVCxFQUFjO0FBQ2xCO0FBQ0Q7QUFSSSxPQUFQO0FBVUQ7Ozs7RUE5Q2dDLGVBQUtXLEk7O2tCQUFuQnZCLEsiLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb250ZW50IGZyb20gJy4uL3V0aWwvY29udGVudCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGJveDogW10sXG4gICAgbGVmdDogJy4uL2ltYWdlcy9XZWFuaW1hbC5qcGVnJyxcbiAgICByaWdodDogJy4uL2ltYWdlcy9XZXdvcmxkLmpwZWcnLFxuICAgIFFSY29kZTogJy4uL2ltYWdlcy9zY2FuQ29kZS5wbmcnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHNjYW5jb2RlKCkge1xuICAgICAgd2VweS5zY2FuQ29kZSh7XG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuYm94ID0gY29udGVudFxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfoh6rlrprkuYnovazlj5HmoIfpopgnLFxuICAgICAgcGF0aDogJy9wYWdlL3VzZXI/aWQ9MTIzJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=