'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _leadtable = require('./../components/leadtable.js');

var _leadtable2 = _interopRequireDefault(_leadtable);

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
      navigationBarTitleText: '我的书评'
    }, _this.$repeat = { "review": { "com": "leadtable", "props": "open" } }, _this.$props = { "leadtable": { "xmlns:v-bind": { "value": "", "for": "review", "item": "getinfo", "index": "index", "key": "index" }, "v-bind:open.once": { "value": "getinfo", "type": "item", "for": "review", "item": "getinfo", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "review", "item": "getinfo", "index": "index", "key": "index" } } }, _this.$events = { "leadtable": { "v-on:childFn": "parentFn" } }, _this.components = {
      leadtable: _leadtable2.default
    }, _this.data = {
      noReview: '',
      review: '',
      title: '',
      icon: '',
      nickname: ''
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlUmV2aWV3LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxlYWR0YWJsZSIsImRhdGEiLCJub1JldmlldyIsInJldmlldyIsInRpdGxlIiwiaWNvbiIsIm5pY2tuYW1lIiwibWV0aG9kcyIsIndyaXRlbmV3IiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEVBQUMsVUFBUyxFQUFDLE9BQU0sV0FBUCxFQUFtQixTQUFRLE1BQTNCLEVBQVYsRSxRQUNYQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFFBQWxCLEVBQTJCLFFBQU8sU0FBbEMsRUFBNEMsU0FBUSxPQUFwRCxFQUE0RCxPQUFNLE9BQWxFLEVBQWhCLEVBQTJGLG9CQUFtQixFQUFDLFNBQVEsU0FBVCxFQUFtQixRQUFPLE1BQTFCLEVBQWlDLE9BQU0sUUFBdkMsRUFBZ0QsUUFBTyxTQUF2RCxFQUFpRSxTQUFRLE9BQXpFLEVBQWlGLE9BQU0sT0FBdkYsRUFBOUcsRUFBOE0sY0FBYSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sUUFBbEIsRUFBMkIsUUFBTyxTQUFsQyxFQUE0QyxTQUFRLE9BQXBELEVBQTRELE9BQU0sT0FBbEUsRUFBM04sRUFBYixFLFFBQ1RDLE8sR0FBVSxFQUFDLGFBQVksRUFBQyxnQkFBZSxVQUFoQixFQUFiLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxnQkFBVTtBQUxMLEssUUFPUEMsTyxHQUFVO0FBQ1JDLGNBRFEsc0JBQ0c7QUFDVCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzZCQU9ELENBQUU7Ozs7MkZBQ0dULEk7Ozs7OztBQUNSVSxvQixHQUFPLEk7O3VCQUNMLGVBQUtDLFdBQUwsQ0FBaUI7QUFDckJDLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILHlCQUFLTixJQUFMLEdBQVlTLElBQUlDLFFBQUosQ0FBYVQsUUFBekI7QUFDQUsseUJBQUtMLFFBQUwsR0FBZ0JRLElBQUlDLFFBQUosQ0FBYUMsUUFBN0I7QUFDQSxtQ0FBS0MsT0FBTCxDQUFhO0FBQ1hQLDJCQUFLLG9DQURNO0FBRVhRLDhCQUFRLE1BRkc7QUFHWGpCLDRCQUFNO0FBQ0pLLGtDQUFVSyxLQUFLTDtBQURYLHVCQUhLO0FBTVhPLCtCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJLLGdDQUFRQyxHQUFSLENBQVlOLEdBQVosRUFBaUIsS0FBakI7QUFDQUssZ0NBQVFDLEdBQVIsQ0FBWU4sSUFBSWIsSUFBaEIsRUFBc0IsVUFBdEI7QUFDQVUsNkJBQUtSLE1BQUwsR0FBY1csSUFBSWIsSUFBbEI7QUFDQVUsNkJBQUtVLE9BQUwsQ0FBYTtBQUNYbEIsa0NBQVFXLElBQUliO0FBREQseUJBQWI7QUFHRDtBQWJVLHFCQUFiO0FBZUQ7QUFuQm9CLGlCQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBc0JZO0FBQ2xCcUIsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBdkRnQyxlQUFLQyxJOztrQkFBbkIvQixLIiwiZmlsZSI6IndyaXRlUmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IExlYWR0YWJsZSBmcm9tICcuLi9jb21wb25lbnRzL2xlYWR0YWJsZSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTkuabor4QnXG4gIH1cblxuICRyZXBlYXQgPSB7XCJyZXZpZXdcIjp7XCJjb21cIjpcImxlYWR0YWJsZVwiLFwicHJvcHNcIjpcIm9wZW5cIn19O1xyXG4kcHJvcHMgPSB7XCJsZWFkdGFibGVcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcInJldmlld1wiLFwiaXRlbVwiOlwiZ2V0aW5mb1wiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOm9wZW4ub25jZVwiOntcInZhbHVlXCI6XCJnZXRpbmZvXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcInJldmlld1wiLFwiaXRlbVwiOlwiZ2V0aW5mb1wiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwieG1sbnM6di1vblwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwicmV2aWV3XCIsXCJpdGVtXCI6XCJnZXRpbmZvXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHtcImxlYWR0YWJsZVwiOntcInYtb246Y2hpbGRGblwiOlwicGFyZW50Rm5cIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBsZWFkdGFibGU6IExlYWR0YWJsZVxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBub1JldmlldzogJycsXG4gICAgcmV2aWV3OiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgaWNvbjogJycsXG4gICAgbmlja25hbWU6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB3cml0ZW5ldygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vcmV2aWV3J1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge31cbiAgYXN5bmMgb25TaG93IChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXdhaXQgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5pY29uID0gcmVzLnVzZXJJbmZvLm5pY2tuYW1lXG4gICAgICAgIHNlbGYubmlja25hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvc2VsZWN0cmV2aWV3JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogc2VsZi5uaWNrbmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICdyZXMnKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICAgICAgICBzZWxmLnJldmlldyA9IHJlcy5kYXRhXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICByZXZpZXc6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cbn1cbiJdfQ==