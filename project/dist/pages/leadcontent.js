'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      navigationBarTitleText: '书评正文'
    }, _this.data = {
      item: 'q',
      title: '',
      avatarUrl: '',
      nickname: '',
      img: '',
      text: '',
      index: '',
      signature: '生活哲学探寻者'
    }, _this.methods = {
      // attent(e) {
      //   wepy.request({
      //     url: ''
      //   })
      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var self = this;
      self.index = option.index;
      console.log(option.index, 'option');
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/lead',
        method: 'POST',
        success: function success(res) {
          console.log(res, 'lead res');
          console.log(res.data[self.index].title);
          self.title = res.data[self.index].title;
          self.nickname = res.data[self.index].nickname;
          self.avatarUrl = res.data[self.index].icon;
          self.text = res.data[self.index].content;
          self.setData({
            title: res.data[self.index].title,
            nickname: res.data[self.index].nickname,
            avatarUrl: res.data[self.index].icon,
            text: res.data[self.index].content
          });
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/leadcontent'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRjb250ZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpdGVtIiwidGl0bGUiLCJhdmF0YXJVcmwiLCJuaWNrbmFtZSIsImltZyIsInRleHQiLCJpbmRleCIsInNpZ25hdHVyZSIsIm1ldGhvZHMiLCJvcHRpb24iLCJzZWxmIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiaWNvbiIsImNvbnRlbnQiLCJzZXREYXRhIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxHQUREO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxpQkFBVyxFQUhOO0FBSUxDLGdCQUFVLEVBSkw7QUFLTEMsV0FBSyxFQUxBO0FBTUxDLFlBQU0sRUFORDtBQU9MQyxhQUFPLEVBUEY7QUFRTEMsaUJBQVc7QUFSTixLLFFBVVBDLE8sR0FBVTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMUSxLOzs7OzsyQkFRSEMsTSxFQUFRO0FBQ2IsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtKLEtBQUwsR0FBYUcsT0FBT0gsS0FBcEI7QUFDQUssY0FBUUMsR0FBUixDQUFZSCxPQUFPSCxLQUFuQixFQUEwQixRQUExQjtBQUNBLHFCQUFLTyxPQUFMLENBQWE7QUFDWEMsYUFBSyw0QkFETTtBQUVYQyxnQkFBUSxNQUZHO0FBR1hDLGVBSFcsbUJBR0hDLEdBSEcsRUFHRTtBQUNYTixrQkFBUUMsR0FBUixDQUFZSyxHQUFaLEVBQWlCLFVBQWpCO0FBQ0FOLGtCQUFRQyxHQUFSLENBQVlLLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJMLEtBQWpDO0FBQ0FTLGVBQUtULEtBQUwsR0FBYWdCLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJMLEtBQWxDO0FBQ0FTLGVBQUtQLFFBQUwsR0FBZ0JjLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJILFFBQXJDO0FBQ0FPLGVBQUtSLFNBQUwsR0FBaUJlLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJZLElBQXRDO0FBQ0FSLGVBQUtMLElBQUwsR0FBWVksSUFBSWxCLElBQUosQ0FBU1csS0FBS0osS0FBZCxFQUFxQmEsT0FBakM7QUFDQVQsZUFBS1UsT0FBTCxDQUFhO0FBQ1huQixtQkFBT2dCLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJMLEtBRGpCO0FBRVhFLHNCQUFVYyxJQUFJbEIsSUFBSixDQUFTVyxLQUFLSixLQUFkLEVBQXFCSCxRQUZwQjtBQUdYRCx1QkFBV2UsSUFBSWxCLElBQUosQ0FBU1csS0FBS0osS0FBZCxFQUFxQlksSUFIckI7QUFJWGIsa0JBQU1ZLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJhO0FBSmhCLFdBQWI7QUFNRDtBQWhCVSxPQUFiO0FBa0JEOzs7d0NBQ21CO0FBQ2xCRSxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUFqRGdDLGVBQUtDLEk7O2tCQUFuQjNCLEsiLCJmaWxlIjoibGVhZGNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lmm6K+E5q2j5paHJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaXRlbTogJ3EnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tuYW1lOiAnJyxcbiAgICBpbWc6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIGluZGV4OiAnJyxcbiAgICBzaWduYXR1cmU6ICfnlJ/mtLvlk7LlrabmjqLlr7vogIUnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyBhdHRlbnQoZSkge1xuICAgIC8vICAgd2VweS5yZXF1ZXN0KHtcbiAgICAvLyAgICAgdXJsOiAnJ1xuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gIH1cblxuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5pbmRleCA9IG9wdGlvbi5pbmRleFxuICAgIGNvbnNvbGUubG9nKG9wdGlvbi5pbmRleCwgJ29wdGlvbicpXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9sZWFkJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAnbGVhZCByZXMnKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YVtzZWxmLmluZGV4XS50aXRsZSlcbiAgICAgICAgc2VsZi50aXRsZSA9IHJlcy5kYXRhW3NlbGYuaW5kZXhdLnRpdGxlXG4gICAgICAgIHNlbGYubmlja25hbWUgPSByZXMuZGF0YVtzZWxmLmluZGV4XS5uaWNrbmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy5kYXRhW3NlbGYuaW5kZXhdLmljb25cbiAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFbc2VsZi5pbmRleF0uY29udGVudFxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIHRpdGxlOiByZXMuZGF0YVtzZWxmLmluZGV4XS50aXRsZSxcbiAgICAgICAgICBuaWNrbmFtZTogcmVzLmRhdGFbc2VsZi5pbmRleF0ubmlja25hbWUsXG4gICAgICAgICAgYXZhdGFyVXJsOiByZXMuZGF0YVtzZWxmLmluZGV4XS5pY29uLFxuICAgICAgICAgIHRleHQ6IHJlcy5kYXRhW3NlbGYuaW5kZXhdLmNvbnRlbnRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cbn1cbiJdfQ==