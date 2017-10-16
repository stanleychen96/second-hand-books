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
      navigationBarTitleText: '藏经阁'
    }, _this.data = {
      img: '../images/WechatIMG165.jpeg',
      // first: '琥珀之剑',
      // second: '',
      // forth: '',
      // fifth: '',
      a1: '',
      a2: '',
      b1: '',
      b2: '../images/加号.png'
    }, _this.methods = {
      tap: function tap() {
        _wepy2.default.navigateTo({
          url: './collection'
        });
      }
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZyIsImExIiwiYTIiLCJiMSIsImIyIiwibWV0aG9kcyIsInRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvcHRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyw2QkFEQTtBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFVBQUksRUFOQztBQU9MQyxVQUFJLEVBUEM7QUFRTEMsVUFBSSxFQVJDO0FBU0xDLFVBQUk7QUFUQyxLLFFBV1BDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7OzsyQkFPSEMsTSxFQUFRO0FBQ2I7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUExQmdDLGVBQUtDLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iXj+e7j+mYgSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZzogJy4uL2ltYWdlcy9XZWNoYXRJTUcxNjUuanBlZycsXG4gICAgLy8gZmlyc3Q6ICfnkKXnj4DkuYvliZEnLFxuICAgIC8vIHNlY29uZDogJycsXG4gICAgLy8gZm9ydGg6ICcnLFxuICAgIC8vIGZpZnRoOiAnJyxcbiAgICBhMTogJycsXG4gICAgYTI6ICcnLFxuICAgIGIxOiAnJyxcbiAgICBiMjogJy4uL2ltYWdlcy/liqDlj7cucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jb2xsZWN0aW9uJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKG9wdGlvbikge1xuICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbilcbiAgICAvLyBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyBzZWxmLmEgPSBvcHRpb24uYVxuICB9XG59XG4iXX0=