'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/user', 'pages/search', 'pages/details', 'pages/information', 'pages/collection', 'pages/required', 'pages/second-hand-books'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: 'Bisque',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: true
      },
      tabBar: {
        color: '#bfbfbf',
        selectedColor: '#1E90FF',
        borderstyle: 'pick',
        backgroundColor: 'pick',
        list: [{
          pagePath: 'pages/user',
          text: '我的收藏',
          iconPath: './images/bookrack.png',
          selectedIconPath: './images/bookrackblue.png'
        }, {
          pagePath: 'pages/required',
          text: '想要寻找',
          iconPath: './images/compass.png',
          selectedIconPath: './images/compassblue.png'
        }, {
          pagePath: 'pages/information',
          text: '我的信息',
          iconPath: './images/me.png',
          selectedIconPath: './images/meblue.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
      _wepy2.default.login({
        success: function success(res) {
          if (res.code) {
            _wepy2.default.request({
              url: 'https://test.com/onLogin',
              data: {
                code: res.code
              }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg);
          }
        }
      });
      _wepy2.default.checkSession({
        success: function success() {},
        fail: function fail() {
          _wepy2.default.login({
            success: function success(res) {
              if (res.code) {
                _wepy2.default.request({
                  url: 'https://test.com/onLogin',
                  data: {
                    code: res.code
                  }
                });
              } else {
                console.log('获取用户登录态失败！' + res.errMsg);
              }
            }
          });
        }
      });
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwicmVxdWVzdCIsInVybCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyTXNnIiwiY2hlY2tTZXNzaW9uIiwiZmFpbCIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFpREUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQTlDZEEsTUE4Q2MsR0E5Q0w7QUFDUEMsYUFBTyxDQUNMLFlBREssRUFFTCxjQUZLLEVBR0wsZUFISyxFQUlMLG1CQUpLLEVBS0wsa0JBTEssRUFNTCxnQkFOSyxFQU9MLHlCQVBLLENBREE7QUFXUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsUUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QixPQUpsQjtBQUtOQywrQkFBdUI7QUFMakIsT0FYRDtBQWtCUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyxxQkFBYSxNQUhQO0FBSU5DLHlCQUFpQixNQUpYO0FBS05DLGNBQU0sQ0FBQztBQUNMQyxvQkFBVSxZQURMO0FBRUxDLGdCQUFNLE1BRkQ7QUFHTEMsb0JBQVUsdUJBSEw7QUFJTEMsNEJBQWtCO0FBSmIsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLGdCQURUO0FBRURDLGdCQUFNLE1BRkw7QUFHREMsb0JBQVUsc0JBSFQ7QUFJREMsNEJBQWtCO0FBSmpCLFNBTEcsRUFVSDtBQUNESCxvQkFBVSxtQkFEVDtBQUVEQyxnQkFBTSxNQUZMO0FBR0RDLG9CQUFVLGlCQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQVZHO0FBTEE7QUFsQkQsS0E4Q0s7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlk7QUFHYjs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDQSxxQkFBS0MsS0FBTCxDQUFXO0FBQ1RDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsY0FBSUEsSUFBSUMsSUFBUixFQUFjO0FBQ1osMkJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxtQkFBSywwQkFETTtBQUVYQyxvQkFBTTtBQUNKSCxzQkFBTUQsSUFBSUM7QUFETjtBQUZLLGFBQWI7QUFNRCxXQVBELE1BT087QUFDTEksb0JBQVFDLEdBQVIsQ0FBWSxlQUFlTixJQUFJTyxNQUEvQjtBQUNEO0FBQ0Y7QUFaUSxPQUFYO0FBY0EscUJBQUtDLFlBQUwsQ0FBa0I7QUFDaEJULGlCQUFTLG1CQUFXLENBQ25CLENBRmU7QUFHaEJVLGNBQU0sZ0JBQVc7QUFDZix5QkFBS1gsS0FBTCxDQUFXO0FBQ1RDLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsa0JBQUlBLElBQUlDLElBQVIsRUFBYztBQUNaLCtCQUFLQyxPQUFMLENBQWE7QUFDWEMsdUJBQUssMEJBRE07QUFFWEMsd0JBQU07QUFDSkgsMEJBQU1ELElBQUlDO0FBRE47QUFGSyxpQkFBYjtBQU1ELGVBUEQsTUFPTztBQUNMSSx3QkFBUUMsR0FBUixDQUFZLGVBQWVOLElBQUlPLE1BQS9CO0FBQ0Q7QUFDRjtBQVpRLFdBQVg7QUFjRDtBQWxCZSxPQUFsQjtBQW9CRDs7OzBCQUVLRyxDLEVBQUc7QUFDUCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJYLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VZLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS3ZCLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLdUIsV0FBTCxDQUFpQjtBQUNmbkIsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hpQixlQUFLdkIsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJLLElBQUlMLFFBQS9CO0FBQ0FxQixnQkFBTUEsR0FBR2hCLElBQUlMLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQWxIMEIsZUFBS3dCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy91c2VyJyxcclxuICAgICAgJ3BhZ2VzL3NlYXJjaCcsXHJcbiAgICAgICdwYWdlcy9kZXRhaWxzJyxcclxuICAgICAgJ3BhZ2VzL2luZm9ybWF0aW9uJyxcclxuICAgICAgJ3BhZ2VzL2NvbGxlY3Rpb24nLFxyXG4gICAgICAncGFnZXMvcmVxdWlyZWQnLFxyXG4gICAgICAncGFnZXMvc2Vjb25kLWhhbmQtYm9va3MnXHJcblxyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnQmlzcXVlJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXHJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBjb2xvcjogJyNiZmJmYmYnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzFFOTBGRicsXHJcbiAgICAgIGJvcmRlcnN0eWxlOiAncGljaycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3BpY2snLFxyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdXNlcicsXHJcbiAgICAgICAgdGV4dDogJ+aIkeeahOaUtuiXjycsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9ib29rcmFjay5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy9ib29rcmFja2JsdWUucG5nJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9yZXF1aXJlZCcsXHJcbiAgICAgICAgdGV4dDogJ+aDs+imgeWvu+aJvicsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9jb21wYXNzLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2NvbXBhc3NibHVlLnBuZydcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5mb3JtYXRpb24nLFxyXG4gICAgICAgIHRleHQ6ICfmiJHnmoTkv6Hmga8nLFxyXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvbWUucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvbWVibHVlLnBuZydcclxuICAgICAgfV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIHRoaXMudGVzdEFzeW5jKClcclxuICAgIHdlcHkubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vdGVzdC5jb20vb25Mb2dpbicsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBjb2RlOiByZXMuY29kZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi355m75b2V5oCB5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgd2VweS5jaGVja1Nlc3Npb24oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2VweS5sb2dpbih7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vdGVzdC5jb20vb25Mb2dpbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi355m75b2V5oCB5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2xlZXAocykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHRlc3RBc3luYygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19