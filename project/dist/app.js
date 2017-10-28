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
      pages: ['pages/train', 'pages/desk', 'pages/morebooks', 'pages/collection', 'pages/lead', 'pages/information', 'pages/search', 'pages/readtime', 'pages/mymessage', 'pages/review'],
      window: {
        backgroundTextStyle: 'light',
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


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwicmVxdWVzdCIsInVybCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyTXNnIiwiY2hlY2tTZXNzaW9uIiwiZmFpbCIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUF3REUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQXJEZEEsTUFxRGMsR0FyREw7QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxZQUZLLEVBR0wsaUJBSEssRUFJTCxrQkFKSyxFQUtMLFlBTEssRUFNTCxtQkFOSyxFQU9MLGNBUEssRUFRTCxnQkFSSyxFQVNMLGlCQVRLLEVBVUwsY0FWSyxDQURBO0FBYVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE9BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMsK0JBQXVCO0FBTGpCLE9BYkQ7QUFvQlBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsTUFIUDtBQUlOQyx5QkFBaUIsTUFKWDtBQUtOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsWUFETDtBQUVMQyxnQkFBTSxHQUZEO0FBR0xDLG9CQUFVLHVCQUhMO0FBSUxDLDRCQUFrQjtBQUpiLFNBQUQsRUFLSDtBQUNESCxvQkFBVSxrQkFEVDtBQUVEQyxnQkFBTSxHQUZMO0FBR0RDLG9CQUFVLHNCQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQUxHLEVBVUg7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyxnQkFBTSxHQUZMO0FBR0RDLG9CQUFVLHNCQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQVZHLEVBZUg7QUFDREgsb0JBQVUsbUJBRFQ7QUFFREMsZ0JBQU0sR0FGTDtBQUdEQyxvQkFBVSxpQkFIVDtBQUlEQyw0QkFBa0I7QUFKakIsU0FmRztBQUxBO0FBcEJELEtBcURLO0FBQUEsVUFKZEMsVUFJYyxHQUpEO0FBQ1hDLGdCQUFVO0FBREMsS0FJQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZZO0FBR2I7Ozs7K0JBRVU7QUFDVCxXQUFLQyxTQUFMO0FBQ0EscUJBQUtDLEtBQUwsQ0FBVztBQUNUQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGNBQUlBLElBQUlDLElBQVIsRUFBYztBQUNaLDJCQUFLQyxPQUFMLENBQWE7QUFDWEMsbUJBQUssMEJBRE07QUFFWEMsb0JBQU07QUFDSkgsc0JBQU1ELElBQUlDO0FBRE47QUFGSyxhQUFiO0FBTUQsV0FQRCxNQU9PO0FBQ0xJLG9CQUFRQyxHQUFSLENBQVksZUFBZU4sSUFBSU8sTUFBL0I7QUFDRDtBQUNGO0FBWlEsT0FBWDtBQWNBLHFCQUFLQyxZQUFMLENBQWtCO0FBQ2hCVCxpQkFBUyxtQkFBVyxDQUNuQixDQUZlO0FBR2hCVSxjQUFNLGdCQUFXO0FBQ2YseUJBQUtYLEtBQUwsQ0FBVztBQUNUQyxxQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGtCQUFJQSxJQUFJQyxJQUFSLEVBQWM7QUFDWiwrQkFBS0MsT0FBTCxDQUFhO0FBQ1hDLHVCQUFLLDBCQURNO0FBRVhDLHdCQUFNO0FBQ0pILDBCQUFNRCxJQUFJQztBQUROO0FBRkssaUJBQWI7QUFNRCxlQVBELE1BT087QUFDTEksd0JBQVFDLEdBQVIsQ0FBWSxlQUFlTixJQUFJTyxNQUEvQjtBQUNEO0FBQ0Y7QUFaUSxXQUFYO0FBY0Q7QUFsQmUsT0FBbEI7QUFvQkQ7OzswQkFFS0csQyxFQUFHO0FBQ1AsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiWCxvQjs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVWSxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUt2QixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS3VCLFdBQUwsQ0FBaUI7QUFDZm5CLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYaUIsZUFBS3ZCLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCSyxJQUFJTCxRQUEvQjtBQUNBcUIsZ0JBQU1BLEdBQUdoQixJQUFJTCxRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUF6SDBCLGVBQUt3QixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvdHJhaW4nLFxyXG4gICAgICAncGFnZXMvZGVzaycsXHJcbiAgICAgICdwYWdlcy9tb3JlYm9va3MnLFxyXG4gICAgICAncGFnZXMvY29sbGVjdGlvbicsXHJcbiAgICAgICdwYWdlcy9sZWFkJyxcclxuICAgICAgJ3BhZ2VzL2luZm9ybWF0aW9uJyxcclxuICAgICAgJ3BhZ2VzL3NlYXJjaCcsXHJcbiAgICAgICdwYWdlcy9yZWFkdGltZScsXHJcbiAgICAgICdwYWdlcy9teW1lc3NhZ2UnLFxyXG4gICAgICAncGFnZXMvcmV2aWV3J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcclxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIGNvbG9yOiAnI2JmYmZiZicsXHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMUU5MEZGJyxcclxuICAgICAgYm9yZGVyc3R5bGU6ICdwaWNrJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncGljaycsXHJcbiAgICAgIGxpc3Q6IFt7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9kZXNrJyxcclxuICAgICAgICB0ZXh0OiAnMScsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9ib29rcmFjay5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy9ib29rcmFja2JsdWUucG5nJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9jb2xsZWN0aW9uJyxcclxuICAgICAgICB0ZXh0OiAnMicsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9jb21wYXNzLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2NvbXBhc3NibHVlLnBuZydcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbGVhZCcsXHJcbiAgICAgICAgdGV4dDogJzMnLFxyXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvY29tcGFzcy5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy9jb21wYXNzYmx1ZS5wbmcnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2luZm9ybWF0aW9uJyxcclxuICAgICAgICB0ZXh0OiAnNCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9tZS5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy9tZWJsdWUucG5nJ1xyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgdGhpcy50ZXN0QXN5bmMoKVxyXG4gICAgd2VweS5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly90ZXN0LmNvbS9vbkxvZ2luJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfnmbvlvZXmgIHlpLHotKXvvIEnICsgcmVzLmVyck1zZylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB3ZXB5LmNoZWNrU2Vzc2lvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB3ZXB5LmxvZ2luKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly90ZXN0LmNvbS9vbkxvZ2luJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfnmbvlvZXmgIHlpLHotKXvvIEnICsgcmVzLmVyck1zZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzbGVlcChzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGVzdEFzeW5jKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=