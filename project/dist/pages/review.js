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
      tempFilePaths: ''
    }, _this.methods = {
      chooseimg: function chooseimg() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            self.tempFilePaths = res.tempFilePaths;
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
          console.log(item.title, 'item.title');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJ0ZW1wRmlsZVBhdGhzIiwibWV0aG9kcyIsImNob29zZWltZyIsInNlbGYiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImZvcm1TdWJtaXQiLCJlIiwiaXRlbSIsImRldGFpbCIsInZhbHVlIiwidGl0bGUiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJzaG93TW9kYWwiLCJzaG93Q2FuY2VsIiwiY29uZmlybSIsImNhbmNlbCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJuaWNrbmFtZSIsImljb24iLCJpbWciLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLHFCQUFlO0FBSFYsSyxRQUtQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLFlBQUlDLE9BQU8sSUFBWDtBQUNBLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLENBRFEsRUFDTDtBQUNWQyxvQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRkssRUFFdUI7QUFDdENDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRyxFQUdrQjtBQUNqQ0MsbUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0Qk4saUJBQUtILGFBQUwsR0FBcUJTLElBQUlULGFBQXpCO0FBQ0Q7QUFOYyxTQUFqQjtBQVFELE9BWE87QUFZUlUsZ0JBWlEsc0JBWUdDLENBWkgsRUFZTTtBQUNaLFlBQUlSLE9BQU8sSUFBWDtBQUNBLFlBQUlTLE9BQU9ELEVBQUVFLE1BQUYsQ0FBU0MsS0FBcEI7QUFDQSxZQUFJQyxRQUFRSCxLQUFLRyxLQUFqQjtBQUNBLFlBQUlDLFVBQVVKLEtBQUtJLE9BQW5CO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlQLEVBQUVFLE1BQUYsQ0FBU0MsS0FBckIsRUFBNEIsTUFBNUI7QUFDQSxZQUFJQyxNQUFNSSxPQUFOLENBQWMsS0FBZCxFQUFxQixFQUFyQixNQUE2QixFQUFqQyxFQUFxQztBQUNuQ0Ysa0JBQVFDLEdBQVIsQ0FBWU4sS0FBS0csS0FBakIsRUFBd0IsWUFBeEI7QUFDQSx5QkFBS0ssU0FBTCxDQUFlO0FBQ2JMLG1CQUFPLElBRE07QUFFYkMscUJBQVMsU0FGSTtBQUdiSyx3QkFBWSxLQUhDO0FBSWJiLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsa0JBQUlBLElBQUlhLE9BQVIsRUFBaUI7QUFDZkwsd0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsZUFGRCxNQUVPLElBQUlULElBQUljLE1BQVIsRUFBZ0I7QUFDckJOLHdCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBQ0Y7QUFWWSxXQUFmO0FBWUQsU0FkRCxNQWNPO0FBQ0wsY0FBSUYsUUFBUUcsT0FBUixDQUFnQixLQUFoQixFQUF1QixFQUF2QixNQUErQixFQUFuQyxFQUF1QztBQUNyQywyQkFBS0MsU0FBTCxDQUFlO0FBQ2JMLHFCQUFPLElBRE07QUFFYkMsdUJBQVMsU0FGSTtBQUdiSywwQkFBWSxLQUhDO0FBSWJiLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsb0JBQUlBLElBQUlhLE9BQVIsRUFBaUI7QUFDZkwsMEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsaUJBRkQsTUFFTyxJQUFJVCxJQUFJYyxNQUFSLEVBQWdCO0FBQ3JCTiwwQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBVlksYUFBZjtBQVlELFdBYkQsTUFhTztBQUNMLDJCQUFLTSxPQUFMLENBQWE7QUFDWEMsbUJBQUssbUNBRE07QUFFWEMsc0JBQVEsTUFGRztBQUdYN0Isb0JBQU07QUFDSmtCLHVCQUFPSixFQUFFRSxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsS0FEbEI7QUFFSkMseUJBQVNMLEVBQUVFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlRSxPQUZwQjtBQUdKVywwQkFBVXhCLEtBQUtKLFFBSFg7QUFJSjZCLHNCQUFNekIsS0FBS0wsU0FKUDtBQUtKK0IscUJBQUsxQixLQUFLSDtBQUxOLGVBSEs7QUFVWFEsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlEsd0JBQVFDLEdBQVIsQ0FBWVQsR0FBWixFQUFpQixLQUFqQjtBQUNEO0FBWlUsYUFBYjtBQWNBLDJCQUFLcUIsWUFBTCxDQUFrQjtBQUNoQkMscUJBQU87QUFEUyxhQUFsQjtBQUdEO0FBQ0Y7QUFDRjtBQWxFTyxLOzs7Ozs2QkFvRUQ7QUFDUCxVQUFJNUIsT0FBTyxJQUFYO0FBQ0EscUJBQUs2QixXQUFMLENBQWlCO0FBQ2Z4QixlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWE4sZUFBS0osUUFBTCxHQUFnQlUsSUFBSXdCLFFBQUosQ0FBYWxDLFFBQTdCO0FBQ0FJLGVBQUtMLFNBQUwsR0FBaUJXLElBQUl3QixRQUFKLENBQWFuQyxTQUE5QjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXRGZ0MsZUFBS29DLEk7O2tCQUFuQnhDLEsiLCJmaWxlIjoicmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgdGVtcEZpbGVQYXRoczogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNob29zZWltZygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgc2VsZi50ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRpdGxlXG4gICAgICBsZXQgY29udGVudCA9IGl0ZW0uY29udGVudFxuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUsICdpdGVtJylcbiAgICAgIGlmICh0aXRsZS5yZXBsYWNlKC9cXHMvZywgJycpID09PSAnJykge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnRpdGxlLCAnaXRlbS50aXRsZScpXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+imgea3u+WKoOagh+mimOeahOWTpicsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbnRlbnQucmVwbGFjZSgvXFxzL2csICcnKSA9PT0gJycpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn6KaB5re75Yqg5YaF5a6555qE5ZOmJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS93cml0ZXJldmlldycsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IGUuZGV0YWlsLnZhbHVlLnRpdGxlLFxuICAgICAgICAgICAgICBjb250ZW50OiBlLmRldGFpbC52YWx1ZS5jb250ZW50LFxuICAgICAgICAgICAgICBuaWNrbmFtZTogc2VsZi5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgaWNvbjogc2VsZi5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgIGltZzogc2VsZi50ZW1wRmlsZVBhdGhzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3JlcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=