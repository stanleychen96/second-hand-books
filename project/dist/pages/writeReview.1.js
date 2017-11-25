'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlUmV2aWV3LjEuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsIm5vUmV2aWV3IiwicmV2aWV3IiwidGl0bGUiLCJpY29uIiwibmlja25hbWUiLCJjcmVhdGVfYXQiLCJtZXRob2RzIiwid3JpdGVuZXciLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsInNldERhdGEiLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBS1RDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGNBQVEsRUFGSDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsWUFBTSxFQUpEO0FBS0xDLGdCQUFVLEVBTEw7QUFNTEMsaUJBQVc7QUFOTixLLFFBUVBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1QsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs2QkFPRCxDQUFFOzs7OzJGQUNHVixJOzs7Ozs7QUFDUlcsb0IsR0FBTyxJOzt1QkFDTCxlQUFLQyxXQUFMLENBQWlCO0FBQ3JCQywyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCx5QkFBS1AsSUFBTCxHQUFZVSxJQUFJQyxRQUFKLENBQWFWLFFBQXpCO0FBQ0FNLHlCQUFLTixRQUFMLEdBQWdCUyxJQUFJQyxRQUFKLENBQWFDLFFBQTdCO0FBQ0EsbUNBQUtDLE9BQUwsQ0FBYTtBQUNYUCwyQkFBSyxvQ0FETTtBQUVYUSw4QkFBUSxNQUZHO0FBR1hsQiw0QkFBTTtBQUNKSyxrQ0FBVU0sS0FBS047QUFEWCx1QkFISztBQU1YUSwrQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSyxnQ0FBUUMsR0FBUixDQUFZTixHQUFaLEVBQWlCLEtBQWpCO0FBQ0FLLGdDQUFRQyxHQUFSLENBQVlOLElBQUlkLElBQWhCLEVBQXNCLFVBQXRCO0FBQ0FXLDZCQUFLVCxNQUFMLEdBQWNZLElBQUlkLElBQWxCO0FBQ0FXLDZCQUFLVSxPQUFMLENBQWE7QUFDWG5CLGtDQUFRWSxJQUFJZDtBQURELHlCQUFiO0FBR0Q7QUFiVSxxQkFBYjtBQWVEO0FBbkJvQixpQkFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQXNCWTtBQUNsQnNCLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OztFQWxEZ0MsZUFBS0MsSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJ3cml0ZVJldmlldy4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOS5puivhCcsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5vUmV2aWV3OiAnJyxcbiAgICByZXZpZXc6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBpY29uOiAnJyxcbiAgICBuaWNrbmFtZTogJycsXG4gICAgY3JlYXRlX2F0OiAnOOaciDbml6UnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB3cml0ZW5ldygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vcmV2aWV3J1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge31cbiAgYXN5bmMgb25TaG93IChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXdhaXQgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5pY29uID0gcmVzLnVzZXJJbmZvLm5pY2tuYW1lXG4gICAgICAgIHNlbGYubmlja25hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvc2VsZWN0cmV2aWV3JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogc2VsZi5uaWNrbmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICdyZXMnKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICAgICAgICBzZWxmLnJldmlldyA9IHJlcy5kYXRhXG4gICAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgICByZXZpZXc6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cbn1cbiJdfQ==