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
      navigationBarTitleText: '详情 '
    }, _this.data = {
      usetime: 'unknow',
      whichclass: 'unknow',
      discribe: '',
      // target: false,
      showTime: false,
      showClass: false,
      showDiscrible: false
    }, _this.methods = {
      OnTapWord: function OnTapWord() {
        var self = this;
        self.show = true;
      },
      showTime: function showTime() {
        var self = this;
        self.showTime = true;
      },
      showClass: function showClass() {
        var self = this;
        self.showClass = true;
      },
      showDiscrible: function showDiscrible() {
        var self = this;
        self.showDiscrible = true;
      },
      comfirmTime: function comfirmTime() {
        var self = this;
        self.showTime = false;
      },
      comfirmClass: function comfirmClass() {
        var self = this;
        self.showClass = false;
      },
      comfirmDiscrible: function comfirmDiscrible() {
        var self = this;
        self.showDiscrible = false;
      },
      Timeinput: function Timeinput(e) {
        console.log(e);
        var self = this;
        self.usetime = e.detail.value;
      },
      Classinput: function Classinput(e) {
        console.log(e);
        var self = this;
        self.whichclass = e.detail.value;
      },
      Discribleinput: function Discribleinput(e) {
        console.log(e);
        var self = this;
        self.discribe = e.detail.value;
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNldGltZSIsIndoaWNoY2xhc3MiLCJkaXNjcmliZSIsInNob3dUaW1lIiwic2hvd0NsYXNzIiwic2hvd0Rpc2NyaWJsZSIsIm1ldGhvZHMiLCJPblRhcFdvcmQiLCJzZWxmIiwic2hvdyIsImNvbWZpcm1UaW1lIiwiY29tZmlybUNsYXNzIiwiY29tZmlybURpc2NyaWJsZSIsIlRpbWVpbnB1dCIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJDbGFzc2lucHV0IiwiRGlzY3JpYmxlaW5wdXQiLCJvcHRpb24iLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLFFBREo7QUFFTEMsa0JBQVksUUFGUDtBQUdMQyxnQkFBVSxFQUhMO0FBSUw7QUFDQUMsZ0JBQVUsS0FMTDtBQU1MQyxpQkFBVyxLQU5OO0FBT0xDLHFCQUFlO0FBUFYsSyxRQVNQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNELE9BSk87QUFLUk4sY0FMUSxzQkFLRztBQUNULFlBQUlLLE9BQU8sSUFBWDtBQUNBQSxhQUFLTCxRQUFMLEdBQWdCLElBQWhCO0FBQ0QsT0FSTztBQVNSQyxlQVRRLHVCQVNJO0FBQ1YsWUFBSUksT0FBTyxJQUFYO0FBQ0FBLGFBQUtKLFNBQUwsR0FBaUIsSUFBakI7QUFDRCxPQVpPO0FBYVJDLG1CQWJRLDJCQWFRO0FBQ2QsWUFBSUcsT0FBTyxJQUFYO0FBQ0FBLGFBQUtILGFBQUwsR0FBcUIsSUFBckI7QUFDRCxPQWhCTztBQWlCUkssaUJBakJRLHlCQWlCTTtBQUNaLFlBQUlGLE9BQU8sSUFBWDtBQUNBQSxhQUFLTCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0QsT0FwQk87QUFxQlJRLGtCQXJCUSwwQkFxQk87QUFDYixZQUFJSCxPQUFPLElBQVg7QUFDQUEsYUFBS0osU0FBTCxHQUFpQixLQUFqQjtBQUNELE9BeEJPO0FBeUJSUSxzQkF6QlEsOEJBeUJXO0FBQ2pCLFlBQUlKLE9BQU8sSUFBWDtBQUNBQSxhQUFLSCxhQUFMLEdBQXFCLEtBQXJCO0FBQ0QsT0E1Qk87QUE2QlJRLGVBN0JRLHFCQTZCRUMsQ0E3QkYsRUE2Qks7QUFDWEMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLFlBQUlOLE9BQU8sSUFBWDtBQUNBQSxhQUFLUixPQUFMLEdBQWVjLEVBQUVHLE1BQUYsQ0FBU0MsS0FBeEI7QUFDRCxPQWpDTztBQWtDUkMsZ0JBbENRLHNCQWtDR0wsQ0FsQ0gsRUFrQ007QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLFlBQUlOLE9BQU8sSUFBWDtBQUNBQSxhQUFLUCxVQUFMLEdBQWtCYSxFQUFFRyxNQUFGLENBQVNDLEtBQTNCO0FBQ0QsT0F0Q087QUF1Q1JFLG9CQXZDUSwwQkF1Q09OLENBdkNQLEVBdUNVO0FBQ2hCQyxnQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EsWUFBSU4sT0FBTyxJQUFYO0FBQ0FBLGFBQUtOLFFBQUwsR0FBZ0JZLEVBQUVHLE1BQUYsQ0FBU0MsS0FBekI7QUFDRDtBQTNDTyxLOzs7OzsyQkE4Q0hHLE0sRUFBUSxDQUNkOzs7d0NBQ21CO0FBQ2xCQyxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUFqRWdDLGVBQUtDLEk7O2tCQUFuQjVCLEsiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ivpuaDhSAnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB1c2V0aW1lOiAndW5rbm93JyxcbiAgICB3aGljaGNsYXNzOiAndW5rbm93JyxcbiAgICBkaXNjcmliZTogJycsXG4gICAgLy8gdGFyZ2V0OiBmYWxzZSxcbiAgICBzaG93VGltZTogZmFsc2UsXG4gICAgc2hvd0NsYXNzOiBmYWxzZSxcbiAgICBzaG93RGlzY3JpYmxlOiBmYWxzZVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgT25UYXBXb3JkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNob3cgPSB0cnVlXG4gICAgfSxcbiAgICBzaG93VGltZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zaG93VGltZSA9IHRydWVcbiAgICB9LFxuICAgIHNob3dDbGFzcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zaG93Q2xhc3MgPSB0cnVlXG4gICAgfSxcbiAgICBzaG93RGlzY3JpYmxlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNob3dEaXNjcmlibGUgPSB0cnVlXG4gICAgfSxcbiAgICBjb21maXJtVGltZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zaG93VGltZSA9IGZhbHNlXG4gICAgfSxcbiAgICBjb21maXJtQ2xhc3MoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2hvd0NsYXNzID0gZmFsc2VcbiAgICB9LFxuICAgIGNvbWZpcm1EaXNjcmlibGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2hvd0Rpc2NyaWJsZSA9IGZhbHNlXG4gICAgfSxcbiAgICBUaW1laW5wdXQoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi51c2V0aW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIENsYXNzaW5wdXQoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi53aGljaGNsYXNzID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIERpc2NyaWJsZWlucHV0KGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZGlzY3JpYmUgPSBlLmRldGFpbC52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIG9uTG9hZChvcHRpb24pIHtcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG59XG4iXX0=