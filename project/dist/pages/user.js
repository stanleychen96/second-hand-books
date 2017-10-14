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
      saler: '刘琦',
      a: '',
      img: '../images/WechatIMG165.jpeg',
      first: '琥珀之剑',
      second: '',
      forth: '',
      fifth: '',
      a1: '',
      a2: '',
      b1: '',
      b2: '../images/加号.png'
    }, _this.methods = {
      tap: function tap() {
        _wepy2.default.navigateTo({
          url: './collection'
        });
      },
      collection: function collection() {
        _wepy2.default.navigateTo({
          url: './collection'
        });
      },
      required: function required() {
        _wepy2.default.navigateTo({
          url: './required'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      console.log(option);
      var self = this;
      self.a = option.a;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNhbGVyIiwiYSIsImltZyIsImZpcnN0Iiwic2Vjb25kIiwiZm9ydGgiLCJmaWZ0aCIsImExIiwiYTIiLCJiMSIsImIyIiwibWV0aG9kcyIsInRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb2xsZWN0aW9uIiwicmVxdWlyZWQiLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwic2VsZiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLElBREY7QUFFTEMsU0FBRyxFQUZFO0FBR0xDLFdBQUssNkJBSEE7QUFJTEMsYUFBTyxNQUpGO0FBS0xDLGNBQVEsRUFMSDtBQU1MQyxhQUFPLEVBTkY7QUFPTEMsYUFBTyxFQVBGO0FBUUxDLFVBQUksRUFSQztBQVNMQyxVQUFJLEVBVEM7QUFVTEMsVUFBSSxFQVZDO0FBV0xDLFVBQUk7QUFYQyxLLFFBYVBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxnQkFOUSx3QkFNSztBQUNYLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUkUsY0FYUSxzQkFXRztBQUNULHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBZk8sSzs7Ozs7MkJBaUJIRyxNLEVBQVE7QUFDYkMsY0FBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0EsVUFBSUcsT0FBTyxJQUFYO0FBQ0FBLFdBQUtuQixDQUFMLEdBQVNnQixPQUFPaEIsQ0FBaEI7QUFDRDs7OztFQXRDZ0MsZUFBS29CLEk7O2tCQUFuQnpCLEsiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfol4/nu4/pmIEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzYWxlcjogJ+WImOeQpicsXG4gICAgYTogJycsXG4gICAgaW1nOiAnLi4vaW1hZ2VzL1dlY2hhdElNRzE2NS5qcGVnJyxcbiAgICBmaXJzdDogJ+eQpeePgOS5i+WJkScsXG4gICAgc2Vjb25kOiAnJyxcbiAgICBmb3J0aDogJycsXG4gICAgZmlmdGg6ICcnLFxuICAgIGExOiAnJyxcbiAgICBhMjogJycsXG4gICAgYjE6ICcnLFxuICAgIGIyOiAnLi4vaW1hZ2VzL+WKoOWPty5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0YXAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgIH0sXG4gICAgY29sbGVjdGlvbigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY29sbGVjdGlvbidcbiAgICAgIH0pXG4gICAgfSxcbiAgICByZXF1aXJlZCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vcmVxdWlyZWQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgY29uc29sZS5sb2cob3B0aW9uKVxuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuYSA9IG9wdGlvbi5hXG4gIH1cbn1cbiJdfQ==