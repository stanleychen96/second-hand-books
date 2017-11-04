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

// import content from '../util/lead'
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
      lead: '',
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
      },
      leadcontent: function leadcontent(e) {
        console.log(e, 'e');
        console.log(e.currentTarget.dataset.index, 'e...index');
        var serial = e.currentTarget.dataset.index;
        _wepy2.default.navigateTo({
          url: './leadcontent?index=' + serial
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/leadselect',
        method: 'POST',
        success: function success(res) {
          console.log(res.data, 'res.data');
          self.lead = res.data;
        }
      });
      for (var index = 0; index < self.lead.length; index++) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZ2xpa2UiLCJsZWFkIiwiY29sb3IiLCJtZXRob2RzIiwibGlrZSIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJpdGVtIiwibGVhZGNvbnRlbnQiLCJzZXJpYWwiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicmVxdWVzdCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJsZW5ndGgiLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPOztBQUVMQyxlQUFTLEVBRko7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLGFBQU87QUFKRixLLFFBTVBDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsQ0FBWjtBQUNBRSxnQkFBUUMsR0FBUixDQUFZSCxFQUFFSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBcEM7QUFDQSxZQUFNQyxPQUFPUCxFQUFFSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBckM7QUFDQTtBQUNBO0FBQ0E7QUFDQUwsYUFBS0osS0FBTCxDQUFXVSxJQUFYLElBQW1CLFNBQW5CO0FBQ0FOLGFBQUtOLE9BQUwsQ0FBYVksSUFBYixJQUFxQix5QkFBckI7QUFDRCxPQVhPO0FBWVJDLGlCQVpRLHVCQVlJUixDQVpKLEVBWU87QUFDYkUsZ0JBQVFDLEdBQVIsQ0FBWUgsQ0FBWixFQUFlLEdBQWY7QUFDQUUsZ0JBQVFDLEdBQVIsQ0FBWUgsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXBDLEVBQTJDLFdBQTNDO0FBQ0EsWUFBSUcsU0FBU1QsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXJDO0FBQ0EsdUJBQUtJLFVBQUwsQ0FBZ0I7QUFDZEMsd0NBQTRCRjtBQURkLFNBQWhCO0FBR0Q7QUFuQk8sSzs7Ozs7NkJBc0JEO0FBQ1AsVUFBSVIsT0FBTyxJQUFYO0FBQ0EscUJBQUtXLE9BQUwsQ0FBYTtBQUNYRCxhQUFLLGtDQURNO0FBRVhFLGdCQUFRLE1BRkc7QUFHWEMsZUFIVyxtQkFHSEMsR0FIRyxFQUdFO0FBQ1hiLGtCQUFRQyxHQUFSLENBQVlZLElBQUlyQixJQUFoQixFQUFzQixVQUF0QjtBQUNBTyxlQUFLTCxJQUFMLEdBQVltQixJQUFJckIsSUFBaEI7QUFDRDtBQU5VLE9BQWI7QUFRQSxXQUFLLElBQUlZLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFMLEtBQUtMLElBQUwsQ0FBVW9CLE1BQXRDLEVBQThDVixPQUE5QyxFQUF1RDtBQUNyREwsYUFBS04sT0FBTCxDQUFhVyxLQUFiLElBQXNCLHdCQUF0QjtBQUNBTCxhQUFLSixLQUFMLENBQVdTLEtBQVgsSUFBb0IsU0FBcEI7QUFDRDtBQUNGOzs7d0NBQ21CO0FBQ2xCVyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUFuRGdDLGVBQUtDLEk7O2tCQUFuQjVCLEsiLCJmaWxlIjoibGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbi8vIGltcG9ydCBjb250ZW50IGZyb20gJy4uL3V0aWwvbGVhZCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpoobor7sgJ1xuICB9XG4gIGRhdGEgPSB7XG5cbiAgICBpbWdsaWtlOiBbXSxcbiAgICBsZWFkOiAnJyxcbiAgICBjb2xvcjogW11cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGxpa2UoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG4gICAgICBjb25zdCBpdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIC8vIHNlbGYuc2V0RGF0YSh7XG4gICAgICAvLyAgIGNvbG9yW2l0ZW1dOiAnI2UwOTY2NCdcbiAgICAgIC8vIH0pXG4gICAgICBzZWxmLmNvbG9yW2l0ZW1dID0gJyNlMDk2NjQnXG4gICAgICBzZWxmLmltZ2xpa2VbaXRlbV0gPSAnLi4vaW1hZ2VzL2FmdGVybGlrZS5wbmcnXG4gICAgfSxcbiAgICBsZWFkY29udGVudChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLCAnZScpXG4gICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCwgJ2UuLi5pbmRleCcpXG4gICAgICBsZXQgc2VyaWFsID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vbGVhZGNvbnRlbnQ/aW5kZXg9JHtzZXJpYWx9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9sZWFkc2VsZWN0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICAgIHNlbGYubGVhZCA9IHJlcy5kYXRhXG4gICAgICB9XG4gICAgfSlcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc2VsZi5sZWFkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgc2VsZi5pbWdsaWtlW2luZGV4XSA9ICcuLi9pbWFnZXMvdGh1bWJzdXAucG5nJ1xuICAgICAgc2VsZi5jb2xvcltpbmRleF0gPSAnI2JmYmZiZidcbiAgICB9XG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19