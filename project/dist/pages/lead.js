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
      },
      leadcontent: function leadcontent(e) {
        console.log(e.currentTarget.dataset.index);
        var serial = e.currentTarget.dataset.index;
        _wepy2.default.navigateTo({
          url: './leadcontent?index=' + serial
        });
      }
      // author() {
      //   wepy.navigateTo({
      //     url: './'
      //   })
      // }

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZ2xpa2UiLCJsZWFkIiwiY29sb3IiLCJtZXRob2RzIiwibGlrZSIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJpdGVtIiwibGVhZGNvbnRlbnQiLCJzZXJpYWwiLCJuYXZpZ2F0ZVRvIiwidXJsIiwibGVuZ3RoIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTzs7QUFFTEMsZUFBUyxFQUZKO0FBR0xDLDBCQUhLO0FBSUxDLGFBQU87QUFKRixLLFFBTVBDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsQ0FBWjtBQUNBRSxnQkFBUUMsR0FBUixDQUFZSCxFQUFFSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBcEM7QUFDQSxZQUFNQyxPQUFPUCxFQUFFSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBckM7QUFDQTtBQUNBO0FBQ0E7QUFDQUwsYUFBS0osS0FBTCxDQUFXVSxJQUFYLElBQW1CLFNBQW5CO0FBQ0FOLGFBQUtOLE9BQUwsQ0FBYVksSUFBYixJQUFxQix5QkFBckI7QUFDRCxPQVhPO0FBWVJDLGlCQVpRLHVCQVlJUixDQVpKLEVBWU87QUFDYkUsZ0JBQVFDLEdBQVIsQ0FBWUgsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXBDO0FBQ0EsWUFBSUcsU0FBU1QsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXJDO0FBQ0EsdUJBQUtJLFVBQUwsQ0FBZ0I7QUFDZEMsd0NBQTRCRjtBQURkLFNBQWhCO0FBR0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZCUSxLOzs7Ozs2QkEwQkQ7QUFDUCxVQUFJUixPQUFPLElBQVg7QUFDQUMsY0FBUUMsR0FBUixDQUFZLGVBQVFTLE1BQXBCO0FBQ0FWLGNBQVFDLEdBQVIsQ0FBWUYsS0FBS04sT0FBakI7QUFDQSxXQUFLLElBQUlXLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVEsZUFBUU0sTUFBcEMsRUFBNENOLE9BQTVDLEVBQXFEO0FBQ25ETCxhQUFLTixPQUFMLENBQWFXLEtBQWIsSUFBc0Isd0JBQXRCO0FBQ0FMLGFBQUtKLEtBQUwsQ0FBV1MsS0FBWCxJQUFvQixTQUFwQjtBQUNEO0FBQ0Y7Ozt3Q0FDbUI7QUFDbEJPLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OztFQWpEZ0MsZUFBS0MsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJsZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi4vdXRpbC9sZWFkJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihuivuyAnXG4gIH1cbiAgZGF0YSA9IHtcblxuICAgIGltZ2xpa2U6IFtdLFxuICAgIGxlYWQ6IGNvbnRlbnQsXG4gICAgY29sb3I6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBsaWtlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgICAgY29uc3QgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAvLyBzZWxmLnNldERhdGEoe1xuICAgICAgLy8gICBjb2xvcltpdGVtXTogJyNlMDk2NjQnXG4gICAgICAvLyB9KVxuICAgICAgc2VsZi5jb2xvcltpdGVtXSA9ICcjZTA5NjY0J1xuICAgICAgc2VsZi5pbWdsaWtlW2l0ZW1dID0gJy4uL2ltYWdlcy9hZnRlcmxpa2UucG5nJ1xuICAgIH0sXG4gICAgbGVhZGNvbnRlbnQoZSkge1xuICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG4gICAgICBsZXQgc2VyaWFsID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vbGVhZGNvbnRlbnQ/aW5kZXg9JHtzZXJpYWx9YFxuICAgICAgfSlcbiAgICB9XG4gICAgLy8gYXV0aG9yKCkge1xuICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgdXJsOiAnLi8nXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBjb25zb2xlLmxvZyhjb250ZW50Lmxlbmd0aClcbiAgICBjb25zb2xlLmxvZyhzZWxmLmltZ2xpa2UpXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGNvbnRlbnQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBzZWxmLmltZ2xpa2VbaW5kZXhdID0gJy4uL2ltYWdlcy90aHVtYnN1cC5wbmcnXG4gICAgICBzZWxmLmNvbG9yW2luZGV4XSA9ICcjYmZiZmJmJ1xuICAgIH1cbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG59XG4iXX0=