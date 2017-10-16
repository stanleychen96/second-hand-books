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
      navigationBarTitleText: '书架'
    }, _this.data = {
      book: '../images/WechatIMG165.jpeg',
      c3: '../images/加号.png',
      src: [],
      show: false
    }, _this.methods = {
      tap: function tap() {
        var that = this;
        _wepy2.default.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var arr = that.src;
            arr.push(res.tempFilePaths[0]);
            that.src = arr;
            that.setData({
              src: arr
            });
          }
        });
      },
      onTapImg: function onTapImg(e) {
        // let self = this
        // self.show = true
        _wepy2.default.navigateTo({
          url: 'details?target=true'
        });
      },
      bindButtonTap: function bindButtonTap() {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      // console.log(option)
      // let self = this
      // self.a = option.a
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/collection'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImJvb2siLCJjMyIsInNyYyIsInNob3ciLCJtZXRob2RzIiwidGFwIiwidGhhdCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiYXJyIiwicHVzaCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwib25UYXBJbWciLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImJpbmRCdXR0b25UYXAiLCJvcHRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSw2QkFERDtBQUVMQyxVQUFJLGtCQUZDO0FBR0xDLFdBQUssRUFIQTtBQUlMQyxZQUFNO0FBSkQsSyxRQU9QQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLFlBQUlDLE9BQU8sSUFBWDtBQUNBLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLENBRFE7QUFFZkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLO0FBR2ZDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRztBQUlmQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFJQyxNQUFNUCxLQUFLSixHQUFmO0FBQ0FXLGdCQUFJQyxJQUFKLENBQVNGLElBQUlHLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBVDtBQUNBVCxpQkFBS0osR0FBTCxHQUFXVyxHQUFYO0FBQ0FQLGlCQUFLVSxPQUFMLENBQWE7QUFDWGQsbUJBQUtXO0FBRE0sYUFBYjtBQUdEO0FBWGMsU0FBakI7QUFhRCxPQWhCTztBQWlCUkksY0FqQlEsb0JBaUJDQyxDQWpCRCxFQWlCSTtBQUNWO0FBQ0E7QUFDQSx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXZCTztBQXdCUkMsbUJBeEJRLDJCQXdCUSxDQUVmO0FBMUJPLEs7Ozs7OzJCQTZCSEMsTSxFQUFRO0FBQ2I7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUE3Q2dDLGVBQUtDLEk7O2tCQUFuQjNCLEsiLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuabmnrYnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGJvb2s6ICcuLi9pbWFnZXMvV2VjaGF0SU1HMTY1LmpwZWcnLFxuICAgIGMzOiAnLi4vaW1hZ2VzL+WKoOWPty5wbmcnLFxuICAgIHNyYzogW10sXG4gICAgc2hvdzogZmFsc2VcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwKCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgbGV0IGFyciA9IHRoYXQuc3JjXG4gICAgICAgICAgYXJyLnB1c2gocmVzLnRlbXBGaWxlUGF0aHNbMF0pXG4gICAgICAgICAgdGhhdC5zcmMgPSBhcnJcbiAgICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgICAgc3JjOiBhcnJcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgb25UYXBJbWcoZSkge1xuICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgICAvLyBzZWxmLnNob3cgPSB0cnVlXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdkZXRhaWxzP3RhcmdldD10cnVlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRCdXR0b25UYXAoKSB7XG5cbiAgICB9XG4gIH1cblxuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgLy8gY29uc29sZS5sb2cob3B0aW9uKVxuICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIHNlbGYuYSA9IG9wdGlvbi5hXG4gIH1cbn1cbiJdfQ==