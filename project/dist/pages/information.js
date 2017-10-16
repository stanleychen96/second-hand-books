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
      navigationBarTitleText: '书架管理员'
    }, _this.data = {
      avatarUrl: '',
      nickName: ''
    }, _this.methods = {
      //   tap() {
      //     wepy.navigateTo({
      //       url: './user'
      //     })
      //   }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/information'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIm1ldGhvZHMiLCJvcHRpb24iLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMQyxnQkFBVTtBQUZMLEssUUFLUEMsTyxHQUFVO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxRLEs7Ozs7OzJCQU9IQyxNLEVBQVE7QUFDYixVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWEgsZUFBS0gsUUFBTCxHQUFnQk0sSUFBSUMsUUFBSixDQUFhUCxRQUE3QjtBQUNBRyxlQUFLSixTQUFMLEdBQWlCTyxJQUFJQyxRQUFKLENBQWFSLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBeEJnQyxlQUFLUyxJOztrQkFBbkJiLEsiLCJmaWxlIjoiaW5mb3JtYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lmm5p62566h55CG5ZGYJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBuaWNrTmFtZTogJydcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8gICB0YXAoKSB7XG4gICAgLy8gICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgICAgdXJsOiAnLi91c2VyJ1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgfVxuICB9XG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19