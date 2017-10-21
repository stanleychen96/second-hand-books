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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZyIsImExIiwiYTIiLCJiMSIsImIyIiwibWV0aG9kcyIsInRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvcHRpb24iLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLDZCQURBO0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsVUFBSSxFQU5DO0FBT0xDLFVBQUksRUFQQztBQVFMQyxVQUFJLEVBUkM7QUFTTEMsVUFBSTtBQVRDLEssUUFXUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzJCQU9IQyxNLEVBQVE7QUFDYjtBQUNBO0FBQ0E7QUFDRDs7O3dDQUNtQjtBQUNsQkMsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBL0JnQyxlQUFLQyxJOztrQkFBbkJoQixLIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6JeP57uP6ZiBJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaW1nOiAnLi4vaW1hZ2VzL1dlY2hhdElNRzE2NS5qcGVnJyxcbiAgICAvLyBmaXJzdDogJ+eQpeePgOS5i+WJkScsXG4gICAgLy8gc2Vjb25kOiAnJyxcbiAgICAvLyBmb3J0aDogJycsXG4gICAgLy8gZmlmdGg6ICcnLFxuICAgIGExOiAnJyxcbiAgICBhMjogJycsXG4gICAgYjE6ICcnLFxuICAgIGIyOiAnLi4vaW1hZ2VzL+WKoOWPty5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0YXAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgLy8gY29uc29sZS5sb2cob3B0aW9uKVxuICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIHNlbGYuYSA9IG9wdGlvbi5hXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19