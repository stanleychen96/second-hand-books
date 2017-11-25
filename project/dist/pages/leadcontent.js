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
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var self = this;
      self.index = option.index;
      console.log(option.index, 'option.index');
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
          console.log(res.data[self.index].img);
          self.img = res.data[self.index].img;
          self.setData({
            title: res.data[self.index].title,
            nickname: res.data[self.index].nickname,
            avatarUrl: res.data[self.index].icon,
            text: res.data[self.index].content,
            img: res.data[self.index].img
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRjb250ZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpdGVtIiwidGl0bGUiLCJhdmF0YXJVcmwiLCJuaWNrbmFtZSIsImltZyIsInRleHQiLCJpbmRleCIsInNpZ25hdHVyZSIsIm1ldGhvZHMiLCJvcHRpb24iLCJzZWxmIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiaWNvbiIsImNvbnRlbnQiLCJzZXREYXRhIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxHQUREO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxpQkFBVyxFQUhOO0FBSUxDLGdCQUFVLEVBSkw7QUFLTEMsV0FBSyxFQUxBO0FBTUxDLFlBQU0sRUFORDtBQU9MQyxhQUFPLEVBUEY7QUFRTEMsaUJBQVc7QUFSTixLLFFBVVBDLE8sR0FBVSxFOzs7OzsyQkFHSEMsTSxFQUFRO0FBQ2IsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtKLEtBQUwsR0FBYUcsT0FBT0gsS0FBcEI7QUFDQUssY0FBUUMsR0FBUixDQUFZSCxPQUFPSCxLQUFuQixFQUEwQixjQUExQjtBQUNBLHFCQUFLTyxPQUFMLENBQWE7QUFDWEMsYUFBSyw0QkFETTtBQUVYQyxnQkFBUSxNQUZHO0FBR1hDLGVBSFcsbUJBR0hDLEdBSEcsRUFHRTtBQUNYTixrQkFBUUMsR0FBUixDQUFZSyxHQUFaLEVBQWlCLFVBQWpCO0FBQ0FOLGtCQUFRQyxHQUFSLENBQVlLLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJMLEtBQWpDO0FBQ0FTLGVBQUtULEtBQUwsR0FBYWdCLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJMLEtBQWxDO0FBQ0FTLGVBQUtQLFFBQUwsR0FBZ0JjLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJILFFBQXJDO0FBQ0FPLGVBQUtSLFNBQUwsR0FBaUJlLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJZLElBQXRDO0FBQ0FSLGVBQUtMLElBQUwsR0FBWVksSUFBSWxCLElBQUosQ0FBU1csS0FBS0osS0FBZCxFQUFxQmEsT0FBakM7QUFDQVIsa0JBQVFDLEdBQVIsQ0FBWUssSUFBSWxCLElBQUosQ0FBU1csS0FBS0osS0FBZCxFQUFxQkYsR0FBakM7QUFDQU0sZUFBS04sR0FBTCxHQUFXYSxJQUFJbEIsSUFBSixDQUFTVyxLQUFLSixLQUFkLEVBQXFCRixHQUFoQztBQUNBTSxlQUFLVSxPQUFMLENBQWE7QUFDWG5CLG1CQUFPZ0IsSUFBSWxCLElBQUosQ0FBU1csS0FBS0osS0FBZCxFQUFxQkwsS0FEakI7QUFFWEUsc0JBQVVjLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJILFFBRnBCO0FBR1hELHVCQUFXZSxJQUFJbEIsSUFBSixDQUFTVyxLQUFLSixLQUFkLEVBQXFCWSxJQUhyQjtBQUlYYixrQkFBTVksSUFBSWxCLElBQUosQ0FBU1csS0FBS0osS0FBZCxFQUFxQmEsT0FKaEI7QUFLWGYsaUJBQUthLElBQUlsQixJQUFKLENBQVNXLEtBQUtKLEtBQWQsRUFBcUJGO0FBTGYsV0FBYjtBQU9EO0FBbkJVLE9BQWI7QUFxQkQ7Ozt3Q0FDbUI7QUFDbEJpQixpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUEvQ2dDLGVBQUtDLEk7O2tCQUFuQjNCLEsiLCJmaWxlIjoibGVhZGNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lmm6K+E5q2j5paHJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaXRlbTogJ3EnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tuYW1lOiAnJyxcbiAgICBpbWc6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIGluZGV4OiAnJyxcbiAgICBzaWduYXR1cmU6ICfnlJ/mtLvlk7LlrabmjqLlr7vogIUnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuXG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmluZGV4ID0gb3B0aW9uLmluZGV4XG4gICAgY29uc29sZS5sb2cob3B0aW9uLmluZGV4LCAnb3B0aW9uLmluZGV4JylcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2xlYWQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICdsZWFkIHJlcycpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhW3NlbGYuaW5kZXhdLnRpdGxlKVxuICAgICAgICBzZWxmLnRpdGxlID0gcmVzLmRhdGFbc2VsZi5pbmRleF0udGl0bGVcbiAgICAgICAgc2VsZi5uaWNrbmFtZSA9IHJlcy5kYXRhW3NlbGYuaW5kZXhdLm5pY2tuYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLmRhdGFbc2VsZi5pbmRleF0uaWNvblxuICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVtzZWxmLmluZGV4XS5jb250ZW50XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhW3NlbGYuaW5kZXhdLmltZylcbiAgICAgICAgc2VsZi5pbWcgPSByZXMuZGF0YVtzZWxmLmluZGV4XS5pbWdcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICB0aXRsZTogcmVzLmRhdGFbc2VsZi5pbmRleF0udGl0bGUsXG4gICAgICAgICAgbmlja25hbWU6IHJlcy5kYXRhW3NlbGYuaW5kZXhdLm5pY2tuYW1lLFxuICAgICAgICAgIGF2YXRhclVybDogcmVzLmRhdGFbc2VsZi5pbmRleF0uaWNvbixcbiAgICAgICAgICB0ZXh0OiByZXMuZGF0YVtzZWxmLmluZGV4XS5jb250ZW50LFxuICAgICAgICAgIGltZzogcmVzLmRhdGFbc2VsZi5pbmRleF0uaW1nXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG59XG4iXX0=