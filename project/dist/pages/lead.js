'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _lead = require('./../util/lead.js');

var _lead2 = _interopRequireDefault(_lead);

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
      navigationBarTitleText: '领读 '
    }, _this.data = {
      author: '蜗牛读书精选',
      title: '李开复：谁的思想启发我投资回报率是原来的8倍',
      text: '导语：在与强大的人工智能的竞争中，人类必须变成创新型学习者，无论是理工学科的blablablablablablablablablablablablablablablablablablablablablabla',
      tapnumber: '2222',
      w: '234',
      like: '102',
      imglike: '../images/thumbsup.png',
      lead: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.lead = _lead2.default;
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/lead'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImF1dGhvciIsInRpdGxlIiwidGV4dCIsInRhcG51bWJlciIsInciLCJsaWtlIiwiaW1nbGlrZSIsImxlYWQiLCJtZXRob2RzIiwic2VsZiIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxRQURIO0FBRUxDLGFBQU8sd0JBRkY7QUFHTEMsWUFBTSwwR0FIRDtBQUlMQyxpQkFBVyxNQUpOO0FBS0xDLFNBQUcsS0FMRTtBQU1MQyxZQUFNLEtBTkQ7QUFPTEMsZUFBUyx3QkFQSjtBQVFMQyxZQUFNO0FBUkQsSyxRQVVQQyxPLEdBQVUsRTs7Ozs7NkJBR0Q7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS0YsSUFBTDtBQUNEOzs7d0NBQ21CO0FBQ2xCRyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUF6QmdDLGVBQUtDLEk7O2tCQUFuQmhCLEsiLCJmaWxlIjoibGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb250ZW50IGZyb20gJy4uL3V0aWwvbGVhZC5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpoobor7sgJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYXV0aG9yOiAn6JyX54mb6K+75Lmm57K+6YCJJyxcbiAgICB0aXRsZTogJ+adjuW8gOWkje+8muiwgeeahOaAneaDs+WQr+WPkeaIkeaKlei1hOWbnuaKpeeOh+aYr+WOn+adpeeahDjlgI0nLFxuICAgIHRleHQ6ICflr7zor63vvJrlnKjkuI7lvLrlpKfnmoTkurrlt6Xmmbrog73nmoTnq57kuonkuK3vvIzkurrnsbvlv4Xpobvlj5jmiJDliJvmlrDlnovlrabkuaDogIXvvIzml6DorrrmmK/nkIblt6Xlrabnp5HnmoRibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGFibGEnLFxuICAgIHRhcG51bWJlcjogJzIyMjInLFxuICAgIHc6ICcyMzQnLFxuICAgIGxpa2U6ICcxMDInLFxuICAgIGltZ2xpa2U6ICcuLi9pbWFnZXMvdGh1bWJzdXAucG5nJyxcbiAgICBsZWFkOiBbXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5sZWFkID0gY29udGVudFxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0sIDEwMDApXG4gIH1cbn1cbiJdfQ==