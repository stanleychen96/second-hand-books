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
                icon: self.avatarUrl
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJ0ZW1wRmlsZVBhdGhzIiwibWV0aG9kcyIsImNob29zZWltZyIsInNlbGYiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImZvcm1TdWJtaXQiLCJlIiwiaXRlbSIsImRldGFpbCIsInZhbHVlIiwidGl0bGUiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJzaG93TW9kYWwiLCJzaG93Q2FuY2VsIiwiY29uZmlybSIsImNhbmNlbCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJuaWNrbmFtZSIsImljb24iLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLHFCQUFlO0FBSFYsSyxRQUtQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLFlBQUlDLE9BQU8sSUFBWDtBQUNBLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLENBRFEsRUFDTDtBQUNWQyxvQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRkssRUFFdUI7QUFDdENDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRyxFQUdrQjtBQUNqQ0MsbUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0Qk4saUJBQUtILGFBQUwsR0FBcUJTLElBQUlULGFBQXpCO0FBQ0Q7QUFOYyxTQUFqQjtBQVFELE9BWE87QUFZUlUsZ0JBWlEsc0JBWUdDLENBWkgsRUFZTTtBQUNaLFlBQUlSLE9BQU8sSUFBWDtBQUNBLFlBQUlTLE9BQU9ELEVBQUVFLE1BQUYsQ0FBU0MsS0FBcEI7QUFDQSxZQUFJQyxRQUFRSCxLQUFLRyxLQUFqQjtBQUNBLFlBQUlDLFVBQVVKLEtBQUtJLE9BQW5CO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlQLEVBQUVFLE1BQUYsQ0FBU0MsS0FBckIsRUFBNEIsTUFBNUI7QUFDQSxZQUFJQyxNQUFNSSxPQUFOLENBQWMsS0FBZCxFQUFxQixFQUFyQixNQUE2QixFQUFqQyxFQUFxQztBQUNuQ0Ysa0JBQVFDLEdBQVIsQ0FBWU4sS0FBS0csS0FBakIsRUFBd0IsWUFBeEI7QUFDQSx5QkFBS0ssU0FBTCxDQUFlO0FBQ2JMLG1CQUFPLElBRE07QUFFYkMscUJBQVMsU0FGSTtBQUdiSyx3QkFBWSxLQUhDO0FBSWJiLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsa0JBQUlBLElBQUlhLE9BQVIsRUFBaUI7QUFDZkwsd0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsZUFGRCxNQUVPLElBQUlULElBQUljLE1BQVIsRUFBZ0I7QUFDckJOLHdCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBQ0Y7QUFWWSxXQUFmO0FBWUQsU0FkRCxNQWNPO0FBQ0wsY0FBSUYsUUFBUUcsT0FBUixDQUFnQixLQUFoQixFQUF1QixFQUF2QixNQUErQixFQUFuQyxFQUF1QztBQUNyQywyQkFBS0MsU0FBTCxDQUFlO0FBQ2JMLHFCQUFPLElBRE07QUFFYkMsdUJBQVMsU0FGSTtBQUdiSywwQkFBWSxLQUhDO0FBSWJiLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsb0JBQUlBLElBQUlhLE9BQVIsRUFBaUI7QUFDZkwsMEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsaUJBRkQsTUFFTyxJQUFJVCxJQUFJYyxNQUFSLEVBQWdCO0FBQ3JCTiwwQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBVlksYUFBZjtBQVlELFdBYkQsTUFhTztBQUNMLDJCQUFLTSxPQUFMLENBQWE7QUFDWEMsbUJBQUssbUNBRE07QUFFWEMsc0JBQVEsTUFGRztBQUdYN0Isb0JBQU07QUFDSmtCLHVCQUFPSixFQUFFRSxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsS0FEbEI7QUFFSkMseUJBQVNMLEVBQUVFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlRSxPQUZwQjtBQUdKVywwQkFBVXhCLEtBQUtKLFFBSFg7QUFJSjZCLHNCQUFNekIsS0FBS0w7QUFKUCxlQUhLO0FBU1hVLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJRLHdCQUFRQyxHQUFSLENBQVlULEdBQVosRUFBaUIsS0FBakI7QUFDRDtBQVhVLGFBQWI7QUFhQSwyQkFBS29CLFlBQUwsQ0FBa0I7QUFDaEJDLHFCQUFPO0FBRFMsYUFBbEI7QUFHRDtBQUNGO0FBQ0Y7QUFqRU8sSzs7Ozs7NkJBbUVEO0FBQ1AsVUFBSTNCLE9BQU8sSUFBWDtBQUNBLHFCQUFLNEIsV0FBTCxDQUFpQjtBQUNmdkIsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hOLGVBQUtKLFFBQUwsR0FBZ0JVLElBQUl1QixRQUFKLENBQWFqQyxRQUE3QjtBQUNBSSxlQUFLTCxTQUFMLEdBQWlCVyxJQUFJdUIsUUFBSixDQUFhbEMsU0FBOUI7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUFyRmdDLGVBQUttQyxJOztrQkFBbkJ2QyxLIiwiZmlsZSI6InJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIHRlbXBGaWxlUGF0aHM6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaG9vc2VpbWcoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHNlbGYudGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBmb3JtU3VibWl0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGl0ZW0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgbGV0IHRpdGxlID0gaXRlbS50aXRsZVxuICAgICAgbGV0IGNvbnRlbnQgPSBpdGVtLmNvbnRlbnRcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlLCAnaXRlbScpXG4gICAgICBpZiAodGl0bGUucmVwbGFjZSgvXFxzL2csICcnKSA9PT0gJycpIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS50aXRsZSwgJ2l0ZW0udGl0bGUnKVxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIGNvbnRlbnQ6ICfopoHmt7vliqDmoIfpopjnmoTlk6YnLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb250ZW50LnJlcGxhY2UoL1xccy9nLCAnJykgPT09ICcnKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+imgea3u+WKoOWGheWuueeahOWTpicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvd3JpdGVyZXZpZXcnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBlLmRldGFpbC52YWx1ZS50aXRsZSxcbiAgICAgICAgICAgICAgY29udGVudDogZS5kZXRhaWwudmFsdWUuY29udGVudCxcbiAgICAgICAgICAgICAgbmlja25hbWU6IHNlbGYubmlja05hbWUsXG4gICAgICAgICAgICAgIGljb246IHNlbGYuYXZhdGFyVXJsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3JlcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=