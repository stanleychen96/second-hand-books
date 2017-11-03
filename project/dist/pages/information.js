'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _info = require('./../util/info.js');

var _info2 = _interopRequireDefault(_info);

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
      nickName: '无花果',
      readtime: '0',
      colnumber: '0',
      userinfo: []

    }, _this.methods = {
      tap: function tap(e) {
        var item = e.currentTarget.dataset.index;
        switch (item) {
          case 0:
            _wepy2.default.navigateTo({
              url: './mymessage'
            });
            break;
          case 1:
            _wepy2.default.navigateTo({
              url: './writeReview'
            });
            break;
          // case 2:
          //   wepy.navigateTo({
          //     url: './mymessage'
          //   })
          //   break
          // case 3:
          //   wepy.navigateTo({
          //     url: './mymessage'
          //   })
          //   break
          // case 4:
          //   wepy.navigateTo({
          //     url: './mymessage'
          //   })
          //   break
          // case 5:
          //   wepy.navigateTo({
          //     url: './mymessage'
          //   })
          //   break
          // case 6:
          //   wepy.navigateTo({
          //     url: './mymessage'
          //   })
          // break
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var self = this;
      self.userinfo = _info2.default;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
      // wepy.request({
      //   url:
      // })
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/information'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsInJlYWR0aW1lIiwiY29sbnVtYmVyIiwidXNlcmluZm8iLCJtZXRob2RzIiwidGFwIiwiZSIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwibmF2aWdhdGVUbyIsInVybCIsIm9wdGlvbiIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMQyxnQkFBVSxLQUZMO0FBR0xDLGdCQUFVLEdBSEw7QUFJTEMsaUJBQVcsR0FKTjtBQUtMQyxnQkFBVTs7QUFMTCxLLFFBU1BDLE8sR0FBVTtBQUNSQyxTQURRLGVBQ0pDLENBREksRUFDRDtBQUNMLFlBQU1DLE9BQU9ELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUFyQztBQUNBLGdCQUFRSCxJQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQ0UsMkJBQUtJLFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUs7QUFEUyxhQUFoQjtBQUdBO0FBQ0YsZUFBSyxDQUFMO0FBQ0UsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUs7QUFEUyxhQUFoQjtBQUdBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFuQ0o7QUFxQ0Q7QUF4Q08sSzs7Ozs7MkJBMENIQyxNLEVBQVE7QUFDYixVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS1gsUUFBTDtBQUNBLHFCQUFLWSxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYSCxlQUFLZCxRQUFMLEdBQWdCaUIsSUFBSUMsUUFBSixDQUFhbEIsUUFBN0I7QUFDQWMsZUFBS2YsU0FBTCxHQUFpQmtCLElBQUlDLFFBQUosQ0FBYW5CLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1BO0FBQ0E7QUFDQTtBQUNEOzs7d0NBQ21CO0FBQ2xCb0IsaUJBQVcsWUFBVztBQUNwQix1QkFBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBeEVnQyxlQUFLQyxJOztrQkFBbkIxQixLIiwiZmlsZSI6ImluZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi4vdXRpbC9pbmZvLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJydcbiAgfVxuICBkYXRhID0ge1xuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja05hbWU6ICfml6DoirHmnpwnLFxuICAgIHJlYWR0aW1lOiAnMCcsXG4gICAgY29sbnVtYmVyOiAnMCcsXG4gICAgdXNlcmluZm86IFtdXG5cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwKGUpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnLi9teW1lc3NhZ2UnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy4vd3JpdGVSZXZpZXcnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVha1xuICAgICAgICAvLyBjYXNlIDI6XG4gICAgICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgLy8gICAgIHVybDogJy4vbXltZXNzYWdlJ1xuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vICAgYnJlYWtcbiAgICAgICAgLy8gY2FzZSAzOlxuICAgICAgICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIC8vICAgICB1cmw6ICcuL215bWVzc2FnZSdcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyAgIGJyZWFrXG4gICAgICAgIC8vIGNhc2UgNDpcbiAgICAgICAgLy8gICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAvLyAgICAgdXJsOiAnLi9teW1lc3NhZ2UnXG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgLy8gICBicmVha1xuICAgICAgICAvLyBjYXNlIDU6XG4gICAgICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgLy8gICAgIHVybDogJy4vbXltZXNzYWdlJ1xuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vICAgYnJlYWtcbiAgICAgICAgLy8gY2FzZSA2OlxuICAgICAgICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIC8vICAgICB1cmw6ICcuL215bWVzc2FnZSdcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAgIC8vIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVzZXJpbmZvID0gY29udGVudFxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIHdlcHkucmVxdWVzdCh7XG4gICAgLy8gICB1cmw6XG4gICAgLy8gfSlcbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9LCAxMDAwKVxuICB9XG59XG4iXX0=