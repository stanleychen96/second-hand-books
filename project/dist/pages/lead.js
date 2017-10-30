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

      imglike: ['../images/thumbsup.png'],
      lead: [],
      color: ['#bfbfbf']
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
      self.lead = _lead2.default;
      // for(push)
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZ2xpa2UiLCJsZWFkIiwiY29sb3IiLCJtZXRob2RzIiwibGlrZSIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJpdGVtIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTzs7QUFFTEMsZUFBUyxDQUFDLHdCQUFELENBRko7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLGFBQU8sQ0FBQyxTQUFEO0FBSkYsSyxRQU1QQyxPLEdBQVU7QUFDUkMsVUFEUSxnQkFDSEMsQ0FERyxFQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlILENBQVo7QUFDQUUsZ0JBQVFDLEdBQVIsQ0FBWUgsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXBDO0FBQ0EsWUFBTUMsT0FBT1AsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0FMLGFBQUtKLEtBQUwsQ0FBV1UsSUFBWCxJQUFtQixTQUFuQjtBQUNBTixhQUFLTixPQUFMLENBQWFZLElBQWIsSUFBcUIseUJBQXJCO0FBQ0Q7QUFYTyxLOzs7Ozs2QkFjRDtBQUNQLFVBQUlOLE9BQU8sSUFBWDtBQUNBQSxXQUFLTCxJQUFMO0FBQ0E7QUFDRDs7O3dDQUNtQjtBQUNsQlksaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBakNnQyxlQUFLQyxJOztrQkFBbkJuQixLIiwiZmlsZSI6ImxlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29udGVudCBmcm9tICcuLi91dGlsL2xlYWQnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aKG6K+7ICdcbiAgfVxuICBkYXRhID0ge1xuXG4gICAgaW1nbGlrZTogWycuLi9pbWFnZXMvdGh1bWJzdXAucG5nJ10sXG4gICAgbGVhZDogW10sXG4gICAgY29sb3I6IFsnI2JmYmZiZiddXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBsaWtlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgICAgY29uc3QgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAvLyBzZWxmLnNldERhdGEoe1xuICAgICAgLy8gICBjb2xvcltpdGVtXTogJyNlMDk2NjQnXG4gICAgICAvLyB9KVxuICAgICAgc2VsZi5jb2xvcltpdGVtXSA9ICcjZTA5NjY0J1xuICAgICAgc2VsZi5pbWdsaWtlW2l0ZW1dID0gJy4uL2ltYWdlcy9hZnRlcmxpa2UucG5nJ1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmxlYWQgPSBjb250ZW50XG4gICAgLy8gZm9yKHB1c2gpXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19