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
      pages: [
      // 'pages/train',
      'pages/desk', 'pages/morebooks', 'pages/collection', 'pages/lead', 'pages/information', 'pages/search', 'pages/readtime', 'pages/mymessage', 'pages/writeReview', 'pages/bookdetail', 'pages/leadcontent', 'pages/review', 'pages/mybooks'],
      window: {
        backgroundTextStyle: 'dack',
        navigationBarBackgroundColor: 'white',
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
          pagePath: 'pages/desk',
          text: '1',
          iconPath: './images/bookrack.png',
          selectedIconPath: './images/bookrackblue.png'
        }, {
          pagePath: 'pages/collection',
          text: '2',
          iconPath: './images/compass.png',
          selectedIconPath: './images/compassblue.png'
        }, {
          pagePath: 'pages/lead',
          text: '3',
          iconPath: './images/compass.png',
          selectedIconPath: './images/compassblue.png'
        }, {
          pagePath: 'pages/information',
          text: '4',
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
      // wepy.login({
      //   success: function(res) {
      //     if (res.code) {
      //       wepy.request({
      //         url: 'https://test.com/onLogin',
      //         data: {
      //           code: res.code
      //         }
      //       })
      //     } else {
      //       console.log('获取用户登录态失败！' + res.errMsg)
      //     }
      //   }
      // })
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


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUE0REUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQXpEZEEsTUF5RGMsR0F6REw7QUFDUEMsYUFBTztBQUNMO0FBQ0Esa0JBRkssRUFHTCxpQkFISyxFQUlMLGtCQUpLLEVBS0wsWUFMSyxFQU1MLG1CQU5LLEVBT0wsY0FQSyxFQVFMLGdCQVJLLEVBU0wsaUJBVEssRUFVTCxtQkFWSyxFQVdMLGtCQVhLLEVBWUwsbUJBWkssRUFhTCxjQWJLLEVBY0wsZUFkSyxDQURBO0FBaUJQQyxjQUFRO0FBQ05DLDZCQUFxQixNQURmO0FBRU5DLHNDQUE4QixPQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCLE9BSmxCO0FBS05DLCtCQUF1QjtBQUxqQixPQWpCRDtBQXdCUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyxxQkFBYSxNQUhQO0FBSU5DLHlCQUFpQixNQUpYO0FBS05DLGNBQU0sQ0FBQztBQUNMQyxvQkFBVSxZQURMO0FBRUxDLGdCQUFNLEdBRkQ7QUFHTEMsb0JBQVUsdUJBSEw7QUFJTEMsNEJBQWtCO0FBSmIsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLGtCQURUO0FBRURDLGdCQUFNLEdBRkw7QUFHREMsb0JBQVUsc0JBSFQ7QUFJREMsNEJBQWtCO0FBSmpCLFNBTEcsRUFVSDtBQUNESCxvQkFBVSxZQURUO0FBRURDLGdCQUFNLEdBRkw7QUFHREMsb0JBQVUsc0JBSFQ7QUFJREMsNEJBQWtCO0FBSmpCLFNBVkcsRUFlSDtBQUNESCxvQkFBVSxtQkFEVDtBQUVEQyxnQkFBTSxHQUZMO0FBR0RDLG9CQUFVLGlCQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQWZHO0FBTEE7QUF4QkQsS0F5REs7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlk7QUFHYjs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLQyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLVCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS1MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWEgsZUFBS1QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJXLElBQUlYLFFBQS9CO0FBQ0FPLGdCQUFNQSxHQUFHSSxJQUFJWCxRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUFqRzBCLGVBQUtZLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgIC8vICdwYWdlcy90cmFpbicsXHJcbiAgICAgICdwYWdlcy9kZXNrJyxcclxuICAgICAgJ3BhZ2VzL21vcmVib29rcycsXHJcbiAgICAgICdwYWdlcy9jb2xsZWN0aW9uJyxcclxuICAgICAgJ3BhZ2VzL2xlYWQnLFxyXG4gICAgICAncGFnZXMvaW5mb3JtYXRpb24nLFxyXG4gICAgICAncGFnZXMvc2VhcmNoJyxcclxuICAgICAgJ3BhZ2VzL3JlYWR0aW1lJyxcclxuICAgICAgJ3BhZ2VzL215bWVzc2FnZScsXHJcbiAgICAgICdwYWdlcy93cml0ZVJldmlldycsXHJcbiAgICAgICdwYWdlcy9ib29rZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL2xlYWRjb250ZW50JyxcclxuICAgICAgJ3BhZ2VzL3JldmlldycsXHJcbiAgICAgICdwYWdlcy9teWJvb2tzJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFjaycsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgY29sb3I6ICcjYmZiZmJmJyxcclxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMxRTkwRkYnLFxyXG4gICAgICBib3JkZXJzdHlsZTogJ3BpY2snLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwaWNrJyxcclxuICAgICAgbGlzdDogW3tcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2Rlc2snLFxyXG4gICAgICAgIHRleHQ6ICcxJyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL2Jvb2tyYWNrLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2Jvb2tyYWNrYmx1ZS5wbmcnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2NvbGxlY3Rpb24nLFxyXG4gICAgICAgIHRleHQ6ICcyJyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL2NvbXBhc3MucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvY29tcGFzc2JsdWUucG5nJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9sZWFkJyxcclxuICAgICAgICB0ZXh0OiAnMycsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9jb21wYXNzLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2NvbXBhc3NibHVlLnBuZydcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5mb3JtYXRpb24nLFxyXG4gICAgICAgIHRleHQ6ICc0JyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL21lLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL21lYmx1ZS5wbmcnXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB0aGlzLnRlc3RBc3luYygpXHJcbiAgICAvLyB3ZXB5LmxvZ2luKHtcclxuICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAvLyAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAvLyAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgLy8gICAgICAgICB1cmw6ICdodHRwczovL3Rlc3QuY29tL29uTG9naW4nLFxyXG4gICAgLy8gICAgICAgICBkYXRhOiB7XHJcbiAgICAvLyAgICAgICAgICAgY29kZTogcmVzLmNvZGVcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+eZu+W9leaAgeWksei0pe+8gScgKyByZXMuZXJyTXNnKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHRlc3RBc3luYygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19