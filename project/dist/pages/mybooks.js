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
      navigationBarTitleText: '我的收藏'
    }, _this.data = {
      noReview: '../images/加.png',
      bookcover: [],
      bookimg: ''
    }, _this.methods = {
      bookdetail: function bookdetail() {
        _wepy2.default.navigateTo({
          url: './bookdetail'
        });
      },
      add: function add() {
        _wepy2.default.navigateTo({
          url: './'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
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
                  }
                });

              case 3:
                _wepy2.default.request({
                  url: 'http://127.0.0.1:7001/selectbook',
                  mothed: 'POST',
                  data: {
                    nickname: self.nickname
                  },
                  success: function success(res) {
                    console.log(res, 'res');
                  }
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/mybooks'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Ym9va3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5vUmV2aWV3IiwiYm9va2NvdmVyIiwiYm9va2ltZyIsIm1ldGhvZHMiLCJib29rZGV0YWlsIiwibmF2aWdhdGVUbyIsInVybCIsImFkZCIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJpY29uIiwidXNlckluZm8iLCJuaWNrbmFtZSIsIm5pY2tOYW1lIiwicmVxdWVzdCIsIm1vdGhlZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLGlCQURMO0FBRUxDLGlCQUFXLEVBRk47QUFHTEMsZUFBUztBQUhKLEssUUFLUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNLO0FBQ1gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxTQU5RLGlCQU1GO0FBQ0osdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFWTyxLOzs7Ozs7MkZBWUlQLEk7Ozs7OztBQUNSUyxvQixHQUFPLEk7O3VCQUNMLGVBQUtDLFdBQUwsQ0FBaUI7QUFDckJDLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILHlCQUFLSSxJQUFMLEdBQVlELElBQUlFLFFBQUosQ0FBYUMsUUFBekI7QUFDQU4seUJBQUtNLFFBQUwsR0FBZ0JILElBQUlFLFFBQUosQ0FBYUUsUUFBN0I7QUFDRDtBQUpvQixpQkFBakIsQzs7O0FBTU4sK0JBQUtDLE9BQUwsQ0FBYTtBQUNYVix1QkFBSyxrQ0FETTtBQUVYVywwQkFBUSxNQUZHO0FBR1hsQix3QkFBTTtBQUNKZSw4QkFBVU4sS0FBS007QUFEWCxtQkFISztBQU1YSiwyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTyw0QkFBUUMsR0FBUixDQUFZUixHQUFaLEVBQWlCLEtBQWpCO0FBQ0Q7QUFSVSxpQkFBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQVdrQjtBQUNsQlMsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBN0NnQyxlQUFLQyxJOztrQkFBbkIxQixLIiwiZmlsZSI6Im15Ym9va3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5pS26JePJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBub1JldmlldzogJy4uL2ltYWdlcy/liqAucG5nJyxcbiAgICBib29rY292ZXI6IFtdLFxuICAgIGJvb2tpbWc6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBib29rZGV0YWlsKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9ib29rZGV0YWlsJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFkZCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgYXN5bmMgb25Mb2FkIChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXdhaXQgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5pY29uID0gcmVzLnVzZXJJbmZvLm5pY2tuYW1lXG4gICAgICAgIHNlbGYubmlja25hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvc2VsZWN0Ym9vaycsXG4gICAgICBtb3RoZWQ6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmlja25hbWU6IHNlbGYubmlja25hbWVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAncmVzJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cbn1cbiJdfQ==