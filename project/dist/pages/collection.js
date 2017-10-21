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
      book: '../images/WechatIMG165.jpeg',
      c3: '../images/加.png',
      src: [],
      usetime: 'unknow',
      whichclass: 'unknow',
      discribe: '添加描述',
      show: false,
      showTime: false,
      showClass: false,
      showDiscrible: false
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImJvb2siLCJjMyIsInNyYyIsInVzZXRpbWUiLCJ3aGljaGNsYXNzIiwiZGlzY3JpYmUiLCJzaG93Iiwic2hvd1RpbWUiLCJzaG93Q2xhc3MiLCJzaG93RGlzY3JpYmxlIiwibWV0aG9kcyIsInRhcCIsInRoYXQiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImFyciIsInB1c2giLCJ0ZW1wRmlsZVBhdGhzIiwic2V0RGF0YSIsIm9uVGFwSW1nIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWxmIiwiY29tZmlybVRpbWUiLCJjb21maXJtQ2xhc3MiLCJjb21maXJtRGlzY3JpYmxlIiwiVGltZWlucHV0IiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwiQ2xhc3NpbnB1dCIsIkRpc2NyaWJsZWlucHV0IiwiZ2V0U3lzdGVtSW5mbyIsImhlaWdodCIsIndpbmRvd0hlaWdodCIsIndpZHRoIiwid2luZG93V2lkdGgiLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLDZCQUREO0FBRUxDLFVBQUksaUJBRkM7QUFHTEMsV0FBSyxFQUhBO0FBSUxDLGVBQVMsUUFKSjtBQUtMQyxrQkFBWSxRQUxQO0FBTUxDLGdCQUFVLE1BTkw7QUFPTEMsWUFBTSxLQVBEO0FBUUxDLGdCQUFVLEtBUkw7QUFTTEMsaUJBQVcsS0FUTjtBQVVMQyxxQkFBZTtBQVZWLEssUUFhUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSixZQUFJQyxPQUFPLElBQVg7QUFDQSx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTyxFQURRO0FBRWZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSztBQUdmQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEc7QUFJZkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUMsTUFBTVAsS0FBS1YsR0FBZjtBQUNBaUIsZ0JBQUlDLElBQUosQ0FBU0YsSUFBSUcsYUFBSixDQUFrQixDQUFsQixDQUFUO0FBQ0FULGlCQUFLVixHQUFMLEdBQVdpQixHQUFYO0FBQ0FQLGlCQUFLVSxPQUFMLENBQWE7QUFDWHBCLG1CQUFLaUI7QUFETSxhQUFiO0FBR0Q7QUFYYyxTQUFqQjtBQWFELE9BaEJPO0FBaUJSSSxjQWpCUSxvQkFpQkNDLENBakJELEVBaUJJO0FBQ1Y7QUFDQTtBQUNBLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BdkJPO0FBd0JSbkIsY0F4QlEsc0JBd0JHO0FBQ1QsWUFBSW9CLE9BQU8sSUFBWDtBQUNBQSxhQUFLcEIsUUFBTCxHQUFnQixJQUFoQjtBQUNELE9BM0JPO0FBNEJSQyxlQTVCUSx1QkE0Qkk7QUFDVixZQUFJbUIsT0FBTyxJQUFYO0FBQ0FBLGFBQUtuQixTQUFMLEdBQWlCLElBQWpCO0FBQ0QsT0EvQk87QUFnQ1JDLG1CQWhDUSwyQkFnQ1E7QUFDZCxZQUFJa0IsT0FBTyxJQUFYO0FBQ0FBLGFBQUtsQixhQUFMLEdBQXFCLElBQXJCO0FBQ0QsT0FuQ087QUFvQ1JtQixpQkFwQ1EseUJBb0NNO0FBQ1osWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtwQixRQUFMLEdBQWdCLEtBQWhCO0FBQ0QsT0F2Q087QUF3Q1JzQixrQkF4Q1EsMEJBd0NPO0FBQ2IsWUFBSUYsT0FBTyxJQUFYO0FBQ0FBLGFBQUtuQixTQUFMLEdBQWlCLEtBQWpCO0FBQ0QsT0EzQ087QUE0Q1JzQixzQkE1Q1EsOEJBNENXO0FBQ2pCLFlBQUlILE9BQU8sSUFBWDtBQUNBQSxhQUFLbEIsYUFBTCxHQUFxQixLQUFyQjtBQUNELE9BL0NPO0FBZ0RSc0IsZUFoRFEscUJBZ0RFUCxDQWhERixFQWdESztBQUNYUSxnQkFBUUMsR0FBUixDQUFZVCxDQUFaO0FBQ0EsWUFBSUcsT0FBTyxJQUFYO0FBQ0FBLGFBQUt4QixPQUFMLEdBQWVxQixFQUFFVSxNQUFGLENBQVNDLEtBQXhCO0FBQ0QsT0FwRE87QUFxRFJDLGdCQXJEUSxzQkFxREdaLENBckRILEVBcURNO0FBQ1pRLGdCQUFRQyxHQUFSLENBQVlULENBQVo7QUFDQSxZQUFJRyxPQUFPLElBQVg7QUFDQUEsYUFBS3ZCLFVBQUwsR0FBa0JvQixFQUFFVSxNQUFGLENBQVNDLEtBQTNCO0FBQ0QsT0F6RE87QUEwRFJFLG9CQTFEUSwwQkEwRE9iLENBMURQLEVBMERVO0FBQ2hCUSxnQkFBUUMsR0FBUixDQUFZVCxDQUFaO0FBQ0EsWUFBSUcsT0FBTyxJQUFYO0FBQ0FBLGFBQUt0QixRQUFMLEdBQWdCbUIsRUFBRVUsTUFBRixDQUFTQyxLQUF6QjtBQUNEO0FBOURPLEs7Ozs7OzZCQWlFRDtBQUNQLFVBQUlSLE9BQU8sSUFBWDtBQUNBLHFCQUFLVyxhQUFMLENBQW1CO0FBQ2pCckIsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYUyxlQUFLWSxNQUFMLEdBQWNyQixJQUFJc0IsWUFBbEI7QUFDQWIsZUFBS2MsS0FBTCxHQUFhdkIsSUFBSXdCLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7O3dDQUNtQjtBQUNsQkMsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBaEdnQyxlQUFLQyxJOztrQkFBbkJqRCxLIiwiZmlsZSI6ImNvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5re75Yqg5L2g5oOz6KaB5Lqk5piT55qE5Lmm57GNJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBib29rOiAnLi4vaW1hZ2VzL1dlY2hhdElNRzE2NS5qcGVnJyxcbiAgICBjMzogJy4uL2ltYWdlcy/liqAucG5nJyxcbiAgICBzcmM6IFtdLFxuICAgIHVzZXRpbWU6ICd1bmtub3cnLFxuICAgIHdoaWNoY2xhc3M6ICd1bmtub3cnLFxuICAgIGRpc2NyaWJlOiAn5re75Yqg5o+P6L+wJyxcbiAgICBzaG93OiBmYWxzZSxcbiAgICBzaG93VGltZTogZmFsc2UsXG4gICAgc2hvd0NsYXNzOiBmYWxzZSxcbiAgICBzaG93RGlzY3JpYmxlOiBmYWxzZVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0YXAoKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMTAsXG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgbGV0IGFyciA9IHRoYXQuc3JjXG4gICAgICAgICAgYXJyLnB1c2gocmVzLnRlbXBGaWxlUGF0aHNbMF0pXG4gICAgICAgICAgdGhhdC5zcmMgPSBhcnJcbiAgICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgICAgc3JjOiBhcnJcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgb25UYXBJbWcoZSkge1xuICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgICAvLyBzZWxmLnNob3cgPSB0cnVlXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdkZXRhaWxzP3RhcmdldD10cnVlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHNob3dUaW1lKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNob3dUaW1lID0gdHJ1ZVxuICAgIH0sXG4gICAgc2hvd0NsYXNzKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNob3dDbGFzcyA9IHRydWVcbiAgICB9LFxuICAgIHNob3dEaXNjcmlibGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2hvd0Rpc2NyaWJsZSA9IHRydWVcbiAgICB9LFxuICAgIGNvbWZpcm1UaW1lKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNob3dUaW1lID0gZmFsc2VcbiAgICB9LFxuICAgIGNvbWZpcm1DbGFzcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zaG93Q2xhc3MgPSBmYWxzZVxuICAgIH0sXG4gICAgY29tZmlybURpc2NyaWJsZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zaG93RGlzY3JpYmxlID0gZmFsc2VcbiAgICB9LFxuICAgIFRpbWVpbnB1dChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnVzZXRpbWUgPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgQ2xhc3NpbnB1dChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLndoaWNoY2xhc3MgPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgRGlzY3JpYmxlaW5wdXQoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5kaXNjcmliZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19