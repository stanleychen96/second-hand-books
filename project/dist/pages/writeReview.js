'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      navigationBarTitleText: '我的书评',
      enablePullDownRefresh: true
    }, _this.data = {
      noReview: '',
      review: '',
      title: '',
      icon: '',
      nickname: '',
      create_at: '8月6日'
    }, _this.methods = {
      writenew: function writenew() {
        _wepy2.default.navigateTo({
          url: './review'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return _wepy2.default.getUserInfo({
                  success: function success(res) {
                    self.icon = res.userInfo.nickname;
                    self.nickname = res.userInfo.nickName;
                    _wepy2.default.request({
                      url: 'http://127.0.0.1:7001/selectreview',
                      method: 'POST',
                      data: {
                        nickname: self.nickname
                      },
                      success: function success(res) {
                        console.log(res, 'res');
                        console.log(res.data, 'res.data');
                        self.review = res.data;
                        self.setData({
                          review: res.data
                        });
                      }
                    });
                  }
                });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow(_x) {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/writeReview'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlUmV2aWV3LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJub1JldmlldyIsInJldmlldyIsInRpdGxlIiwiaWNvbiIsIm5pY2tuYW1lIiwiY3JlYXRlX2F0IiwibWV0aG9kcyIsIndyaXRlbmV3IiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUtUQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxnQkFBVSxFQUxMO0FBTUxDLGlCQUFXO0FBTk4sSyxRQVFQQyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDRztBQUNULHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSzs7Ozs7NkJBT0QsQ0FBRTs7OzsyRkFDR1YsSTs7Ozs7O0FBQ1JXLG9CLEdBQU8sSTs7dUJBQ0wsZUFBS0MsV0FBTCxDQUFpQjtBQUNyQkMsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgseUJBQUtQLElBQUwsR0FBWVUsSUFBSUMsUUFBSixDQUFhVixRQUF6QjtBQUNBTSx5QkFBS04sUUFBTCxHQUFnQlMsSUFBSUMsUUFBSixDQUFhQyxRQUE3QjtBQUNBLG1DQUFLQyxPQUFMLENBQWE7QUFDWFAsMkJBQUssb0NBRE07QUFFWFEsOEJBQVEsTUFGRztBQUdYbEIsNEJBQU07QUFDSkssa0NBQVVNLEtBQUtOO0FBRFgsdUJBSEs7QUFNWFEsK0JBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkssZ0NBQVFDLEdBQVIsQ0FBWU4sR0FBWixFQUFpQixLQUFqQjtBQUNBSyxnQ0FBUUMsR0FBUixDQUFZTixJQUFJZCxJQUFoQixFQUFzQixVQUF0QjtBQUNBVyw2QkFBS1QsTUFBTCxHQUFjWSxJQUFJZCxJQUFsQjtBQUNBVyw2QkFBS1UsT0FBTCxDQUFhO0FBQ1huQixrQ0FBUVksSUFBSWQ7QUFERCx5QkFBYjtBQUdEO0FBYlUscUJBQWI7QUFlRDtBQW5Cb0IsaUJBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FzQlk7QUFDbEJzQixpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUFsRGdDLGVBQUtDLEk7O2tCQUFuQjVCLEsiLCJmaWxlIjoid3JpdGVSZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5Lmm6K+EJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbm9SZXZpZXc6ICcnLFxuICAgIHJldmlldzogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGljb246ICcnLFxuICAgIG5pY2tuYW1lOiAnJyxcbiAgICBjcmVhdGVfYXQ6ICc45pyINuaXpSdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHdyaXRlbmV3KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9yZXZpZXcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7fVxuICBhc3luYyBvblNob3cgKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmljb24gPSByZXMudXNlckluZm8ubmlja25hbWVcbiAgICAgICAgc2VsZi5uaWNrbmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9zZWxlY3RyZXZpZXcnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiBzZWxmLm5pY2tuYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3JlcycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ3Jlcy5kYXRhJylcbiAgICAgICAgICAgIHNlbGYucmV2aWV3ID0gcmVzLmRhdGFcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHJldmlldzogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19