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
      navigationBarTitleText: '已兑换的电子书'
    }, _this.data = {
      shell: '0',
      word: '阅读1小时奖励1个蜗牛壳，可兑换电子书﹀',
      howlong: '0'
    }, _this.methods = {
      tap: function tap() {
        var self = this;
        console.log('...');
        self.word = '阅读1小时奖励1个蜗牛壳，攒够即可兑换电子书无限制阅读权；蜗牛兑换价格不视为电子书实际定价；各端蜗牛壳各自计算使用；未登录用户的蜗牛壳及兑换数据仅保留在当前设备';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {}
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/readtime'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWR0aW1lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzaGVsbCIsIndvcmQiLCJob3dsb25nIiwibWV0aG9kcyIsInRhcCIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwib3B0aW9uIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxHQURGO0FBRUxDLFlBQU0sc0JBRkQ7QUFHTEMsZUFBUztBQUhKLEssUUFNUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0FGLGFBQUtKLElBQUwsR0FBWSxrRkFBWjtBQUNEO0FBTE8sSzs7Ozs7MkJBT0hPLE0sRUFBUSxDQUNkOzs7d0NBQ21CO0FBQ2xCQyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUF2QmdDLGVBQUtDLEk7O2tCQUFuQmYsSyIsImZpbGUiOiJyZWFkdGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflt7LlhZHmjaLnmoTnlLXlrZDkuaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzaGVsbDogJzAnLFxuICAgIHdvcmQ6ICfpmIXor7sx5bCP5pe25aWW5YqxMeS4quicl+eJm+Wjs++8jOWPr+WFkeaNoueUteWtkOS5pu+5gCcsXG4gICAgaG93bG9uZzogJzAnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHRhcCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJy4uLicpXG4gICAgICBzZWxmLndvcmQgPSAn6ZiF6K+7MeWwj+aXtuWlluWKsTHkuKronJfniZvlo7PvvIzmlJLlpJ/ljbPlj6/lhZHmjaLnlLXlrZDkuabml6DpmZDliLbpmIXor7vmnYPvvJvonJfniZvlhZHmjaLku7fmoLzkuI3op4bkuLrnlLXlrZDkuablrp7pmYXlrprku7fvvJvlkITnq6/onJfniZvlo7PlkIToh6rorqHnrpfkvb/nlKjvvJvmnKrnmbvlvZXnlKjmiLfnmoTonJfniZvlo7Plj4rlhZHmjaLmlbDmja7ku4Xkv53nlZnlnKjlvZPliY3orr7lpIcnXG4gICAgfVxuICB9XG4gIG9uTG9hZChvcHRpb24pIHtcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG59XG4iXX0=