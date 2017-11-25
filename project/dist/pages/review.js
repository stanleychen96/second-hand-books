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
      navigationBarTitleText: ''
    }, _this.data = {
      avatarUrl: '',
      nickName: '',
      tempFilePaths: '../images/垃圾桶.png'
    }, _this.methods = {
      chooseimg: function chooseimg() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            console.log(res, 'resimg');
            console.log(res.tempFilePaths[0], '123');
            self.tempFilePaths = res.tempFilePaths[0];
            self.setData({
              tempFilePaths: res.tempFilePaths[0]
            });
            console.log(self.tempFilePaths);
          }
        });
      },
      formSubmit: function formSubmit(e) {
        var self = this;
        var item = e.detail.value;
        var title = item.title;
        var content = item.content;
        console.log(e.detail.value, 'item');
        if (title.replace(/\s/g, '') === '') {
          _wepy2.default.showModal({
            title: '提示',
            content: '要添加标题的哦',
            showCancel: false,
            success: function success(res) {
              if (res.confirm) {
                console.log('用户点击确定');
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
            }
          });
        } else {
          if (content.replace(/\s/g, '') === '') {
            _wepy2.default.showModal({
              title: '提示',
              content: '要添加内容的哦',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  console.log('用户点击确定');
                } else if (res.cancel) {
                  console.log('用户点击取消');
                }
              }
            });
          } else {
            console.log('request');
            _wepy2.default.request({
              url: 'http://127.0.0.1:7001/writereview',
              method: 'POST',
              data: {
                title: e.detail.value.title,
                content: e.detail.value.content,
                nickname: self.nickName,
                icon: self.avatarUrl,
                img: self.tempFilePaths
              },
              success: function success(res) {
                console.log(res, 'res');
              }
            });
            // wepy.uploadFile({
            //   url: 'https://127.0.0.1:7001/updateimg',
            //   filePath: self.tempFilePaths,
            //   name: 'file',
            //   formData: {
            //     'user': 'test'
            //   },
            //   success: function(res) {
            //     console.log(res, 'upload-res')
            //   }
            // })
            _wepy2.default.navigateBack({
              delta: 1
            });
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/review'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJ0ZW1wRmlsZVBhdGhzIiwibWV0aG9kcyIsImNob29zZWltZyIsInNlbGYiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwiZm9ybVN1Ym1pdCIsImUiLCJpdGVtIiwiZGV0YWlsIiwidmFsdWUiLCJ0aXRsZSIsImNvbnRlbnQiLCJyZXBsYWNlIiwic2hvd01vZGFsIiwic2hvd0NhbmNlbCIsImNvbmZpcm0iLCJjYW5jZWwiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwibmlja25hbWUiLCJpY29uIiwiaW1nIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxxQkFBZTtBQUhWLEssUUFLUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixZQUFJQyxPQUFPLElBQVg7QUFDQSx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTyxDQURRO0FBRWZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSztBQUdmQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEc7QUFJZkMsbUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QkMsb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWixFQUFpQixRQUFqQjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZRixJQUFJVCxhQUFK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QyxLIiwiZmlsZSI6InJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIHRlbXBGaWxlUGF0aHM6ICcuLi9pbWFnZXMv5Z6D5Zy+5qG2LnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNob29zZWltZygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICdyZXNpbWcnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZW1wRmlsZVBhdGhzWzBdLCAnMTIzJylcbiAgICAgICAgICBzZWxmLnRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICB0ZW1wRmlsZVBhdGhzOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2coc2VsZi50ZW1wRmlsZVBhdGhzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGl0bGVcbiAgICAgIGxldCBjb250ZW50ID0gaXRlbS5jb250ZW50XG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSwgJ2l0ZW0nKVxuICAgICAgaWYgKHRpdGxlLnJlcGxhY2UoL1xccy9nLCAnJykgPT09ICcnKSB7XG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+imgea3u+WKoOagh+mimOeahOWTpicsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbnRlbnQucmVwbGFjZSgvXFxzL2csICcnKSA9PT0gJycpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn6KaB5re75Yqg5YaF5a6555qE5ZOmJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QnKVxuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvd3JpdGVyZXZpZXcnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBlLmRldGFpbC52YWx1ZS50aXRsZSxcbiAgICAgICAgICAgICAgY29udGVudDogZS5kZXRhaWwudmFsdWUuY29udGVudCxcbiAgICAgICAgICAgICAgbmlja25hbWU6IHNlbGYubmlja05hbWUsXG4gICAgICAgICAgICAgIGljb246IHNlbGYuYXZhdGFyVXJsLFxuICAgICAgICAgICAgICBpbWc6IHNlbGYudGVtcEZpbGVQYXRoc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICdyZXMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAvLyAgIHVybDogJ2h0dHBzOi8vMTI3LjAuMC4xOjcwMDEvdXBkYXRlaW1nJyxcbiAgICAgICAgICAvLyAgIGZpbGVQYXRoOiBzZWxmLnRlbXBGaWxlUGF0aHMsXG4gICAgICAgICAgLy8gICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgLy8gICBmb3JtRGF0YToge1xuICAgICAgICAgIC8vICAgICAndXNlcic6ICd0ZXN0J1xuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMsICd1cGxvYWQtcmVzJylcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyB9KVxuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLm5pY2tOYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuYXZhdGFyVXJsID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==