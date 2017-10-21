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
      discribe: '添加描述',
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
    value: function onLoad(option) {
      console.log(option);
      var self = this;
      console.log(option.target);
      self.src = option.target;
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/details'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInVzZXRpbWUiLCJ3aGljaGNsYXNzIiwiZGlzY3JpYmUiLCJzaG93VGltZSIsInNob3dDbGFzcyIsInNob3dEaXNjcmlibGUiLCJtZXRob2RzIiwiT25UYXBXb3JkIiwic2VsZiIsInNob3ciLCJjb21maXJtVGltZSIsImNvbWZpcm1DbGFzcyIsImNvbWZpcm1EaXNjcmlibGUiLCJUaW1laW5wdXQiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiQ2xhc3NpbnB1dCIsIkRpc2NyaWJsZWlucHV0Iiwib3B0aW9uIiwidGFyZ2V0Iiwic3JjIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxRQURKO0FBRUxDLGtCQUFZLFFBRlA7QUFHTEMsZ0JBQVUsTUFITDtBQUlMO0FBQ0FDLGdCQUFVLEtBTEw7QUFNTEMsaUJBQVcsS0FOTjtBQU9MQyxxQkFBZTtBQVBWLEssUUFTUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDRCxPQUpPO0FBS1JOLGNBTFEsc0JBS0c7QUFDVCxZQUFJSyxPQUFPLElBQVg7QUFDQUEsYUFBS0wsUUFBTCxHQUFnQixJQUFoQjtBQUNELE9BUk87QUFTUkMsZUFUUSx1QkFTSTtBQUNWLFlBQUlJLE9BQU8sSUFBWDtBQUNBQSxhQUFLSixTQUFMLEdBQWlCLElBQWpCO0FBQ0QsT0FaTztBQWFSQyxtQkFiUSwyQkFhUTtBQUNkLFlBQUlHLE9BQU8sSUFBWDtBQUNBQSxhQUFLSCxhQUFMLEdBQXFCLElBQXJCO0FBQ0QsT0FoQk87QUFpQlJLLGlCQWpCUSx5QkFpQk07QUFDWixZQUFJRixPQUFPLElBQVg7QUFDQUEsYUFBS0wsUUFBTCxHQUFnQixLQUFoQjtBQUNELE9BcEJPO0FBcUJSUSxrQkFyQlEsMEJBcUJPO0FBQ2IsWUFBSUgsT0FBTyxJQUFYO0FBQ0FBLGFBQUtKLFNBQUwsR0FBaUIsS0FBakI7QUFDRCxPQXhCTztBQXlCUlEsc0JBekJRLDhCQXlCVztBQUNqQixZQUFJSixPQUFPLElBQVg7QUFDQUEsYUFBS0gsYUFBTCxHQUFxQixLQUFyQjtBQUNELE9BNUJPO0FBNkJSUSxlQTdCUSxxQkE2QkVDLENBN0JGLEVBNkJLO0FBQ1hDLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQSxZQUFJTixPQUFPLElBQVg7QUFDQUEsYUFBS1IsT0FBTCxHQUFlYyxFQUFFRyxNQUFGLENBQVNDLEtBQXhCO0FBQ0QsT0FqQ087QUFrQ1JDLGdCQWxDUSxzQkFrQ0dMLENBbENILEVBa0NNO0FBQ1pDLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQSxZQUFJTixPQUFPLElBQVg7QUFDQUEsYUFBS1AsVUFBTCxHQUFrQmEsRUFBRUcsTUFBRixDQUFTQyxLQUEzQjtBQUNELE9BdENPO0FBdUNSRSxvQkF2Q1EsMEJBdUNPTixDQXZDUCxFQXVDVTtBQUNoQkMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLFlBQUlOLE9BQU8sSUFBWDtBQUNBQSxhQUFLTixRQUFMLEdBQWdCWSxFQUFFRyxNQUFGLENBQVNDLEtBQXpCO0FBQ0Q7QUEzQ08sSzs7Ozs7MkJBOENIRyxNLEVBQVE7QUFDYk4sY0FBUUMsR0FBUixDQUFZSyxNQUFaO0FBQ0EsVUFBSWIsT0FBTyxJQUFYO0FBQ0FPLGNBQVFDLEdBQVIsQ0FBWUssT0FBT0MsTUFBbkI7QUFDQWQsV0FBS2UsR0FBTCxHQUFXRixPQUFPQyxNQUFsQjtBQUNEOzs7d0NBQ21CO0FBQ2xCRSxpQkFBVyxZQUFXO0FBQ3BCLHVCQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs7RUFyRWdDLGVBQUtDLEk7O2tCQUFuQjlCLEsiLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfor6bmg4UgJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgdXNldGltZTogJ3Vua25vdycsXG4gICAgd2hpY2hjbGFzczogJ3Vua25vdycsXG4gICAgZGlzY3JpYmU6ICfmt7vliqDmj4/ov7AnLFxuICAgIC8vIHRhcmdldDogZmFsc2UsXG4gICAgc2hvd1RpbWU6IGZhbHNlLFxuICAgIHNob3dDbGFzczogZmFsc2UsXG4gICAgc2hvd0Rpc2NyaWJsZTogZmFsc2VcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIE9uVGFwV29yZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zaG93ID0gdHJ1ZVxuICAgIH0sXG4gICAgc2hvd1RpbWUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2hvd1RpbWUgPSB0cnVlXG4gICAgfSxcbiAgICBzaG93Q2xhc3MoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2hvd0NsYXNzID0gdHJ1ZVxuICAgIH0sXG4gICAgc2hvd0Rpc2NyaWJsZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zaG93RGlzY3JpYmxlID0gdHJ1ZVxuICAgIH0sXG4gICAgY29tZmlybVRpbWUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2hvd1RpbWUgPSBmYWxzZVxuICAgIH0sXG4gICAgY29tZmlybUNsYXNzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNob3dDbGFzcyA9IGZhbHNlXG4gICAgfSxcbiAgICBjb21maXJtRGlzY3JpYmxlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNob3dEaXNjcmlibGUgPSBmYWxzZVxuICAgIH0sXG4gICAgVGltZWlucHV0KGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYudXNldGltZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBDbGFzc2lucHV0KGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYud2hpY2hjbGFzcyA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBEaXNjcmlibGVpbnB1dChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmRpc2NyaWJlID0gZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gIH1cblxuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgY29uc29sZS5sb2cob3B0aW9uKVxuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbi50YXJnZXQpXG4gICAgc2VsZi5zcmMgPSBvcHRpb24udGFyZ2V0XG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19