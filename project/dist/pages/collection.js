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
      },
      toplist: function toplist() {
        _wepy2.default.navigateTo({
          url: './morebooks'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImJveCIsImxlZnQiLCJyaWdodCIsIlFSY29kZSIsIm1ldGhvZHMiLCJzY2FuY29kZSIsInNjYW5Db2RlIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ0b3BsaXN0IiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImZyb20iLCJ0YXJnZXQiLCJ0aXRsZSIsInBhdGgiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFlBQU0seUJBRkQ7QUFHTEMsYUFBTyx3QkFIRjtBQUlMQyxjQUFRO0FBSkgsSyxRQU9QQyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDRztBQUNULHVCQUFLQyxRQUFMLENBQWM7QUFDWkMsbUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQkMsb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBSFcsU0FBZDtBQUtELE9BUE87QUFRUkcsYUFSUSxxQkFRRTtBQUNSLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBWk8sSzs7Ozs7NkJBZUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS2QsR0FBTDtBQUNEOzs7d0NBQ21CO0FBQ2xCZSxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7OztzQ0FDaUJSLEcsRUFBSztBQUNyQixVQUFJQSxJQUFJUyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekI7QUFDQVIsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBSVUsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTEMsZUFBTyxTQURGO0FBRUxDLGNBQU0sbUJBRkQ7QUFHTGIsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQjtBQUNELFNBTEk7QUFNTGEsY0FBTSxjQUFTYixHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVJJLE9BQVA7QUFVRDs7OztFQW5EZ0MsZUFBS2MsSTs7a0JBQW5CMUIsSyIsImZpbGUiOiJjb2xsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi4vdXRpbC9jb250ZW50J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgYm94OiBbXSxcbiAgICBsZWZ0OiAnLi4vaW1hZ2VzL1dlYW5pbWFsLmpwZWcnLFxuICAgIHJpZ2h0OiAnLi4vaW1hZ2VzL1dld29ybGQuanBlZycsXG4gICAgUVJjb2RlOiAnLi4vaW1hZ2VzL3NjYW5Db2RlLnBuZydcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgc2NhbmNvZGUoKSB7XG4gICAgICB3ZXB5LnNjYW5Db2RlKHtcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHRvcGxpc3QoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL21vcmVib29rcydcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuYm94ID0gY29udGVudFxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfoh6rlrprkuYnovazlj5HmoIfpopgnLFxuICAgICAgcGF0aDogJy9wYWdlL3VzZXI/aWQ9MTIzJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=