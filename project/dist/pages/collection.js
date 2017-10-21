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
      navigationBarTitleText: '添加你的书籍'
    }, _this.data = {
      book: '../images/WechatIMG165.jpeg',
      c3: '../images/加号.png',
      src: [],
      show: false
    }, _this.methods = {
      tap: function tap() {
        var that = this;
        _wepy2.default.chooseImage({
          count: 1,
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
      bindButtonTap: function bindButtonTap() {}
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImJvb2siLCJjMyIsInNyYyIsInNob3ciLCJtZXRob2RzIiwidGFwIiwidGhhdCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiYXJyIiwicHVzaCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwib25UYXBJbWciLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImJpbmRCdXR0b25UYXAiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsImhlaWdodCIsIndpbmRvd0hlaWdodCIsIndpZHRoIiwid2luZG93V2lkdGgiLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLDZCQUREO0FBRUxDLFVBQUksa0JBRkM7QUFHTEMsV0FBSyxFQUhBO0FBSUxDLFlBQU07QUFKRCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU8sQ0FEUTtBQUVmQyxvQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRks7QUFHZkMsc0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHO0FBSWZDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlDLE1BQU1QLEtBQUtKLEdBQWY7QUFDQVcsZ0JBQUlDLElBQUosQ0FBU0YsSUFBSUcsYUFBSixDQUFrQixDQUFsQixDQUFUO0FBQ0FULGlCQUFLSixHQUFMLEdBQVdXLEdBQVg7QUFDQVAsaUJBQUtVLE9BQUwsQ0FBYTtBQUNYZCxtQkFBS1c7QUFETSxhQUFiO0FBR0Q7QUFYYyxTQUFqQjtBQWFELE9BaEJPO0FBaUJSSSxjQWpCUSxvQkFpQkNDLENBakJELEVBaUJJO0FBQ1Y7QUFDQTtBQUNBLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BdkJPO0FBd0JSQyxtQkF4QlEsMkJBd0JRLENBRWY7QUExQk8sSzs7Ozs7NkJBNkJEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJaLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFUsZUFBS0UsTUFBTCxHQUFjWixJQUFJYSxZQUFsQjtBQUNBSCxlQUFLSSxLQUFMLEdBQWFkLElBQUllLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7O3dDQUNtQjtBQUNsQkMsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBdERnQyxlQUFLQyxJOztrQkFBbkJsQyxLIiwiZmlsZSI6ImNvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5re75Yqg5L2g55qE5Lmm57GNJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBib29rOiAnLi4vaW1hZ2VzL1dlY2hhdElNRzE2NS5qcGVnJyxcbiAgICBjMzogJy4uL2ltYWdlcy/liqDlj7cucG5nJyxcbiAgICBzcmM6IFtdLFxuICAgIHNob3c6IGZhbHNlXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHRhcCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGxldCBhcnIgPSB0aGF0LnNyY1xuICAgICAgICAgIGFyci5wdXNoKHJlcy50ZW1wRmlsZVBhdGhzWzBdKVxuICAgICAgICAgIHRoYXQuc3JjID0gYXJyXG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgIHNyYzogYXJyXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIG9uVGFwSW1nKGUpIHtcbiAgICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgICAgLy8gc2VsZi5zaG93ID0gdHJ1ZVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnZGV0YWlscz90YXJnZXQ9dHJ1ZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kQnV0dG9uVGFwKCkge1xuXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19