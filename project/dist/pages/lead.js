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

      imglike: [],
      lead: _lead2.default,
      color: []
    }, _this.methods = {
      like: function like(e) {
        var self = this;
        console.log(e);
        console.log(e.currentTarget.dataset.index);
        var item = e.currentTarget.dataset.index;
        // self.setData({
        //   color[item]: '#e09664'
        // })
        self.color[item] = '#e09664';
        self.imglike[item] = '../images/afterlike.png';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      console.log(_lead2.default.length);
      console.log(self.imglike);
      for (var index = 0; index < _lead2.default.length; index++) {
        self.imglike[index] = '../images/thumbsup.png';
        self.color[index] = '#bfbfbf';
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZ2xpa2UiLCJsZWFkIiwiY29sb3IiLCJtZXRob2RzIiwibGlrZSIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJpdGVtIiwibGVuZ3RoIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTzs7QUFFTEMsZUFBUyxFQUZKO0FBR0xDLDBCQUhLO0FBSUxDLGFBQU87QUFKRixLLFFBTVBDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsQ0FBWjtBQUNBRSxnQkFBUUMsR0FBUixDQUFZSCxFQUFFSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBcEM7QUFDQSxZQUFNQyxPQUFPUCxFQUFFSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBckM7QUFDQTtBQUNBO0FBQ0E7QUFDQUwsYUFBS0osS0FBTCxDQUFXVSxJQUFYLElBQW1CLFNBQW5CO0FBQ0FOLGFBQUtOLE9BQUwsQ0FBYVksSUFBYixJQUFxQix5QkFBckI7QUFDRDtBQVhPLEs7Ozs7OzZCQWNEO0FBQ1AsVUFBSU4sT0FBTyxJQUFYO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxlQUFRSyxNQUFwQjtBQUNBTixjQUFRQyxHQUFSLENBQVlGLEtBQUtOLE9BQWpCO0FBQ0EsV0FBSyxJQUFJVyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRLGVBQVFFLE1BQXBDLEVBQTRDRixPQUE1QyxFQUFxRDtBQUNuREwsYUFBS04sT0FBTCxDQUFhVyxLQUFiLElBQXNCLHdCQUF0QjtBQUNBTCxhQUFLSixLQUFMLENBQVdTLEtBQVgsSUFBb0IsU0FBcEI7QUFDRDtBQUNGOzs7d0NBQ21CO0FBQ2xCRyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUFyQ2dDLGVBQUtDLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoibGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb250ZW50IGZyb20gJy4uL3V0aWwvbGVhZCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpoobor7sgJ1xuICB9XG4gIGRhdGEgPSB7XG5cbiAgICBpbWdsaWtlOiBbXSxcbiAgICBsZWFkOiBjb250ZW50LFxuICAgIGNvbG9yOiBbXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbGlrZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleClcbiAgICAgIGNvbnN0IGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgLy8gc2VsZi5zZXREYXRhKHtcbiAgICAgIC8vICAgY29sb3JbaXRlbV06ICcjZTA5NjY0J1xuICAgICAgLy8gfSlcbiAgICAgIHNlbGYuY29sb3JbaXRlbV0gPSAnI2UwOTY2NCdcbiAgICAgIHNlbGYuaW1nbGlrZVtpdGVtXSA9ICcuLi9pbWFnZXMvYWZ0ZXJsaWtlLnBuZydcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgY29uc29sZS5sb2coY29udGVudC5sZW5ndGgpXG4gICAgY29uc29sZS5sb2coc2VsZi5pbWdsaWtlKVxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBjb250ZW50Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgc2VsZi5pbWdsaWtlW2luZGV4XSA9ICcuLi9pbWFnZXMvdGh1bWJzdXAucG5nJ1xuICAgICAgc2VsZi5jb2xvcltpbmRleF0gPSAnI2JmYmZiZidcbiAgICB9XG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19