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
      navigationBarTitleText: '添加你想要交易的书籍'
    }, _this.data = {
      c3: '../images/加.png',
      src: [],
      del: '../images/垃圾桶.png',
      usetime: ['unknow'],
      whichclass: ['unknow'],
      discribe: ['添加描述'],
      show: false,
      showTime: false,
      showClass: false,
      showDiscrible: false,
      id: null
    }, _this.methods = {
      tap: function tap() {
        var that = this;
        _wepy2.default.chooseImage({
          count: 10,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var arr = that.src;
            arr.push(res.tempFilePaths[0]);
            that.src = arr;
            that.setData({
              src: arr
            });
          }
        });
      },
      onTapImg: function onTapImg(e) {
        // let self = this
        // self.show = true
        _wepy2.default.navigateTo({
          url: 'details?target=true'
        });
      },
      showTime: function showTime(e) {
        var self = this;
        self.id = e.currentTarget.id;
        self.showTime = true;
      },
      showClass: function showClass(e) {
        var self = this;
        self.id = e.currentTarget.id;
        self.showClass = true;
      },
      showDiscrible: function showDiscrible(e) {
        var self = this;
        self.id = e.currentTarget.id;
        self.showDiscrible = true;
      },
      comfirmTime: function comfirmTime(e) {
        console.log(e);
        var self = this;
        self.showTime = false;
      },
      comfirmClass: function comfirmClass(e) {
        var self = this;
        self.showClass = false;
      },
      comfirmDiscrible: function comfirmDiscrible(e) {
        var self = this;
        self.showDiscrible = false;
      },
      Timeinput: function Timeinput(e) {
        var self = this;
        self.usetime[self.id] = e.detail.value;
      },
      Classinput: function Classinput(e) {
        var self = this;
        console.log(e);
        self.whichclass[self.id] = e.detail.value;
      },
      Discribleinput: function Discribleinput(e) {
        var self = this;
        self.discribe[self.id] = e.detail.value;
      },
      del: function del(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        self.src.splice(index, 1);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/collection'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImMzIiwic3JjIiwiZGVsIiwidXNldGltZSIsIndoaWNoY2xhc3MiLCJkaXNjcmliZSIsInNob3ciLCJzaG93VGltZSIsInNob3dDbGFzcyIsInNob3dEaXNjcmlibGUiLCJpZCIsIm1ldGhvZHMiLCJ0YXAiLCJ0aGF0IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJhcnIiLCJwdXNoIiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJvblRhcEltZyIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImN1cnJlbnRUYXJnZXQiLCJjb21maXJtVGltZSIsImNvbnNvbGUiLCJsb2ciLCJjb21maXJtQ2xhc3MiLCJjb21maXJtRGlzY3JpYmxlIiwiVGltZWlucHV0IiwiZGV0YWlsIiwidmFsdWUiLCJDbGFzc2lucHV0IiwiRGlzY3JpYmxlaW5wdXQiLCJpbmRleCIsImRhdGFzZXQiLCJzcGxpY2UiLCJnZXRTeXN0ZW1JbmZvIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFVBQUksaUJBREM7QUFFTEMsV0FBSyxFQUZBO0FBR0xDLFdBQUssbUJBSEE7QUFJTEMsZUFBUyxDQUFDLFFBQUQsQ0FKSjtBQUtMQyxrQkFBWSxDQUFDLFFBQUQsQ0FMUDtBQU1MQyxnQkFBVSxDQUFDLE1BQUQsQ0FOTDtBQU9MQyxZQUFNLEtBUEQ7QUFRTEMsZ0JB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LFFBQVFmLEVBQUVJLGFBQUYsQ0FBZ0JZLE9BQWhCLENBQXdCRCxLQUF0QztBQUNBWixhQUFLM0IsR0FBTCxDQUFTeUMsTUFBVCxDQUFnQkYsS0FBaEIsRUFBdUIsQ0FBdkI7QUFDRDtBQXZFTyxLOzs7Ozs2QkEwRUQ7QUFDUCxVQUFJWixPQUFPLElBQVg7QUFDQSxxQkFBS2UsYUFBTCxDQUFtQjtBQUNqQnpCLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFMsZUFBS2dCLE1BQUwsR0FBY3pCLElBQUkwQixZQUFsQjtBQUNBakIsZUFBS2tCLEtBQUwsR0FBYTNCLElBQUk0QixXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozt3Q0FDbUI7QUFDbEJDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OztFQTFHZ0MsZUFBS0MsSTs7a0JBQW5CdEQsSyIsImZpbGUiOiJjb2xsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a3u+WKoOS9oOaDs+imgeS6pOaYk+eahOS5puexjSdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgYzM6ICcuLi9pbWFnZXMv5YqgLnBuZycsXG4gICAgc3JjOiBbXSxcbiAgICBkZWw6ICcuLi9pbWFnZXMv5Z6D5Zy+5qG2LnBuZycsXG4gICAgdXNldGltZTogWyd1bmtub3cnXSxcbiAgICB3aGljaGNsYXNzOiBbJ3Vua25vdyddLFxuICAgIGRpc2NyaWJlOiBbJ+a3u+WKoOaPj+i/sCddLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIHNob3dUaW1lOiBmYWxzZSxcbiAgICBzaG93Q2xhc3M6IGZhbHNlLFxuICAgIHNob3dEaXNjcmlibGU6IGZhbHNlLFxuICAgIGlkOiBudWxsXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHRhcCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxMCxcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBsZXQgYXJyID0gdGhhdC5zcmNcbiAgICAgICAgICBhcnIucHVzaChyZXMudGVtcEZpbGVQYXRoc1swXSlcbiAgICAgICAgICB0aGF0LnNyYyA9IGFyclxuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICBzcmM6IGFyclxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblRhcEltZyhlKSB7XG4gICAgICAvLyBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIC8vIHNlbGYuc2hvdyA9IHRydWVcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ2RldGFpbHM/dGFyZ2V0PXRydWUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2hvd1RpbWUoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmlkID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBzZWxmLnNob3dUaW1lID0gdHJ1ZVxuICAgIH0sXG4gICAgc2hvd0NsYXNzKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5pZCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5zaG93Q2xhc3MgPSB0cnVlXG4gICAgfSxcbiAgICBzaG93RGlzY3JpYmxlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5pZCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5zaG93RGlzY3JpYmxlID0gdHJ1ZVxuICAgIH0sXG5cbiAgICBjb21maXJtVGltZShlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNob3dUaW1lID0gZmFsc2VcbiAgICB9LFxuICAgIGNvbWZpcm1DbGFzcyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2hvd0NsYXNzID0gZmFsc2VcbiAgICB9LFxuICAgIGNvbWZpcm1EaXNjcmlibGUoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNob3dEaXNjcmlibGUgPSBmYWxzZVxuICAgIH0sXG5cbiAgICBUaW1laW5wdXQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnVzZXRpbWVbc2VsZi5pZF0gPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgQ2xhc3NpbnB1dChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBzZWxmLndoaWNoY2xhc3Nbc2VsZi5pZF0gPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgRGlzY3JpYmxlaW5wdXQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmRpc2NyaWJlW3NlbGYuaWRdID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGRlbChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHNlbGYuc3JjLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG59XG4iXX0=