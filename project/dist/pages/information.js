'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _info = require('./../util/info.js');

var _info2 = _interopRequireDefault(_info);

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
      avatarUrl: '',
      nickName: '无花果',
      readtime: '0',
      colnumber: '0',
      userinfo: []

    }, _this.methods = {
      tap: function tap(e) {
        console.log(e);
        var item = e.currentTarget.dataset.index;
        console.log(item);
        switch (item) {
          case 0:
            _wepy2.default.navigateTo({
              url: './mymessage'
            });
            break;
          case 1:
            _wepy2.default.navigateTo({
              url: './review'
            });
            break;
          case 2:
            _wepy2.default.navigateTo({
              url: './mymessage'
            });
            break;
          case 3:
            _wepy2.default.navigateTo({
              url: './mymessage'
            });
            break;
          case 4:
            _wepy2.default.navigateTo({
              url: './mymessage'
            });
            break;
          case 5:
            _wepy2.default.navigateTo({
              url: './mymessage'
            });
            break;
          case 6:
            _wepy2.default.navigateTo({
              url: './mymessage'
            });
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var self = this;
      self.userinfo = _info2.default;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
    }
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/information'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsInJlYWR0aW1lIiwiY29sbnVtYmVyIiwidXNlcmluZm8iLCJtZXRob2RzIiwidGFwIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvcHRpb24iLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsS0FGTDtBQUdMQyxnQkFBVSxHQUhMO0FBSUxDLGlCQUFXLEdBSk47QUFLTEMsZ0JBQVU7O0FBTEwsSyxRQVNQQyxPLEdBQVU7QUFDUkMsU0FEUSxlQUNKQyxDQURJLEVBQ0Q7QUFDTEMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLFlBQU1HLE9BQU9ILEVBQUVJLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUFyQztBQUNBTCxnQkFBUUMsR0FBUixDQUFZQyxJQUFaO0FBQ0EsZ0JBQVFBLElBQVI7QUFDRSxlQUFLLENBQUw7QUFDRSwyQkFBS0ksVUFBTCxDQUFnQjtBQUNkQyxtQkFBSztBQURTLGFBQWhCO0FBR0E7QUFDRixlQUFLLENBQUw7QUFDRSwyQkFBS0QsVUFBTCxDQUFnQjtBQUNkQyxtQkFBSztBQURTLGFBQWhCO0FBR0E7QUFDRixlQUFLLENBQUw7QUFDRSwyQkFBS0QsVUFBTCxDQUFnQjtBQUNkQyxtQkFBSztBQURTLGFBQWhCO0FBR0E7QUFDRixlQUFLLENBQUw7QUFDRSwyQkFBS0QsVUFBTCxDQUFnQjtBQUNkQyxtQkFBSztBQURTLGFBQWhCO0FBR0E7QUFDRixlQUFLLENBQUw7QUFDRSwyQkFBS0QsVUFBTCxDQUFnQjtBQUNkQyxtQkFBSztBQURTLGFBQWhCO0FBR0E7QUFDRixlQUFLLENBQUw7QUFDRSwyQkFBS0QsVUFBTCxDQUFnQjtBQUNkQyxtQkFBSztBQURTLGFBQWhCO0FBR0E7QUFDRixlQUFLLENBQUw7QUFDRSwyQkFBS0QsVUFBTCxDQUFnQjtBQUNkQyxtQkFBSztBQURTLGFBQWhCO0FBR0E7QUFuQ0o7QUFxQ0Q7QUExQ08sSzs7Ozs7MkJBNENIQyxNLEVBQVE7QUFDYixVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS2IsUUFBTDtBQUNBLHFCQUFLYyxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYSCxlQUFLaEIsUUFBTCxHQUFnQm1CLElBQUlDLFFBQUosQ0FBYXBCLFFBQTdCO0FBQ0FnQixlQUFLakIsU0FBTCxHQUFpQm9CLElBQUlDLFFBQUosQ0FBYXJCLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7d0NBQ21CO0FBQ2xCc0IsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBdkVnQyxlQUFLQyxJOztrQkFBbkI1QixLIiwiZmlsZSI6ImluZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi4vdXRpbC9pbmZvLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJydcbiAgfVxuICBkYXRhID0ge1xuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja05hbWU6ICfml6DoirHmnpwnLFxuICAgIHJlYWR0aW1lOiAnMCcsXG4gICAgY29sbnVtYmVyOiAnMCcsXG4gICAgdXNlcmluZm86IFtdXG5cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBjb25zdCBpdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuL215bWVzc2FnZSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnLi9yZXZpZXcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy4vbXltZXNzYWdlJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuL215bWVzc2FnZSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnLi9teW1lc3NhZ2UnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy4vbXltZXNzYWdlJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuL215bWVzc2FnZSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVzZXJpbmZvID0gY29udGVudFxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cbn1cbiJdfQ==