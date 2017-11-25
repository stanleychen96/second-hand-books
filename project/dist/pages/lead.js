'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import content from '../util/lead'
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
      lead: '',
      color: [],
      count: []
    }, _this.methods = {
      like: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var self, item, updatelikenumber;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  self = this;
                  item = e.currentTarget.dataset.index;
                  updatelikenumber = self.lead[item].likenumber;

                  console.log(self.lead[item].liketap, '2');

                  if (!(self.lead[item].liketap === 0)) {
                    _context.next = 11;
                    break;
                  }

                  self.lead[item].likenumber = updatelikenumber;
                  updatelikenumber++;
                  _context.next = 9;
                  return _wepy2.default.request({
                    url: 'http://127.0.0.1:7001/updatelikenum',
                    method: 'POST',
                    data: {
                      id: item + 1,
                      likenumber: updatelikenumber,
                      liketap: 1
                    },
                    success: function success(res) {
                      console.log(res, 'update-res');
                      self.color[item] = '#e09664';
                      self.imglike[item] = '../images/afterlike.png';
                    }
                  });

                case 9:
                  _context.next = 12;
                  break;

                case 11:
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '赞过了唷',
                    showCancel: false,
                    success: function success(res) {
                      if (res.confirm) {
                        console.log('用户点击确定');
                      }
                    }
                  });

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function like(_x) {
          return _ref2.apply(this, arguments);
        }

        return like;
      }(),
      leadcontent: function leadcontent(e) {
        var self = this;
        var serial = e.currentTarget.dataset.index;
        var updatetapnumber = self.lead[serial].tapnumber;
        updatetapnumber++;
        self.lead[serial].tapnumber = updatetapnumber;
        _wepy2.default.navigateTo({
          url: './leadcontent?index=' + serial
        });
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/updatetapnum',
          method: 'POST',
          data: {
            id: serial + 1,
            tapnumber: updatetapnumber
          },
          success: function success(res) {
            console.log(res, 'update-res');
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/leadselect',
        method: 'POST',
        success: function success(res) {
          self.lead = res.data;
          self.setData({
            lead: res.data
          });
          console.log(res.data, 'onleadres');
          for (var index = 0; index < self.lead.length; index++) {
            if (res.data[index + 1].liketap === false) {
              self.color[index] = '#e09664';
              self.imglike[index] = '../images/afterlike.png';
            } else {
              self.imglike[index] = '../images/thumbsup.png';
              self.color[index] = '#bfbfbf';
            }
          }
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/lead'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZ2xpa2UiLCJsZWFkIiwiY29sb3IiLCJjb3VudCIsIm1ldGhvZHMiLCJsaWtlIiwiZSIsInNlbGYiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsInVwZGF0ZWxpa2VudW1iZXIiLCJsaWtlbnVtYmVyIiwiY29uc29sZSIsImxvZyIsImxpa2V0YXAiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaWQiLCJzdWNjZXNzIiwicmVzIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm0iLCJsZWFkY29udGVudCIsInNlcmlhbCIsInVwZGF0ZXRhcG51bWJlciIsInRhcG51bWJlciIsIm5hdmlnYXRlVG8iLCJzZXREYXRhIiwibGVuZ3RoIiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxZQUFNLEVBRkQ7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGFBQU87QUFKRixLLFFBT1BDLE8sR0FBVTtBQUNGQyxVQURFO0FBQUEsNkZBQ0dDLENBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLHNCQUZFLEdBRUssSUFGTDtBQUdBQyxzQkFIQSxHQUdPRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FIL0I7QUFJRkMsa0NBSkUsR0FJaUJMLEtBQUtOLElBQUwsQ0FBVU8sSUFBVixFQUFnQkssVUFKakM7O0FBS05DLDBCQUFRQyxHQUFSLENBQVlSLEtBQUtOLElBQUwsQ0FBVU8s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c0Isd0JBQXRCO0FBQ0FKLG1CQUFLTCxLQUFMLENBQVdTLEtBQVgsSUFBb0IsU0FBcEI7QUFDRDtBQUNGO0FBQ0Y7QUFsQlUsT0FBYjtBQW9CRDs7O3dDQUNtQjtBQUNsQndCLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OztFQWxHZ0MsZUFBS0MsSTs7a0JBQW5CekMsSyIsImZpbGUiOiJsZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8gaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi4vdXRpbC9sZWFkJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihuivuyAnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGltZ2xpa2U6IFtdLFxuICAgIGxlYWQ6ICcnLFxuICAgIGNvbG9yOiBbXSxcbiAgICBjb3VudDogW11cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgbGlrZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IHVwZGF0ZWxpa2VudW1iZXIgPSBzZWxmLmxlYWRbaXRlbV0ubGlrZW51bWJlclxuICAgICAgY29uc29sZS5sb2coc2VsZi5sZWFkW2l0ZW1dLmxpa2V0YXAsICcyJylcbiAgICAgIGlmIChzZWxmLmxlYWRbaXRlbV0ubGlrZXRhcCA9PT0gMCkge1xuICAgICAgICBzZWxmLmxlYWRbaXRlbV0ubGlrZW51bWJlciA9IHVwZGF0ZWxpa2VudW1iZXJcbiAgICAgICAgdXBkYXRlbGlrZW51bWJlcisrXG4gICAgICAgIGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3VwZGF0ZWxpa2VudW0nLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGlkOiBpdGVtICsgMSxcbiAgICAgICAgICAgIGxpa2VudW1iZXI6IHVwZGF0ZWxpa2VudW1iZXIsXG4gICAgICAgICAgICBsaWtldGFwOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLCAndXBkYXRlLXJlcycpXG4gICAgICAgICAgICBzZWxmLmNvbG9yW2l0ZW1dID0gJyNlMDk2NjQnXG4gICAgICAgICAgICBzZWxmLmltZ2xpa2VbaXRlbV0gPSAnLi4vaW1hZ2VzL2FmdGVybGlrZS5wbmcnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICBjb250ZW50OiAn6LWe6L+H5LqG5ZS3JyxcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBsZWFkY29udGVudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBzZXJpYWwgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgbGV0IHVwZGF0ZXRhcG51bWJlciA9IHNlbGYubGVhZFtzZXJpYWxdLnRhcG51bWJlclxuICAgICAgdXBkYXRldGFwbnVtYmVyKytcbiAgICAgIHNlbGYubGVhZFtzZXJpYWxdLnRhcG51bWJlciA9IHVwZGF0ZXRhcG51bWJlclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9sZWFkY29udGVudD9pbmRleD0ke3NlcmlhbH1gXG4gICAgICB9KVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL3VwZGF0ZXRhcG51bScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IHNlcmlhbCArIDEsXG4gICAgICAgICAgdGFwbnVtYmVyOiB1cGRhdGV0YXBudW1iZXJcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICd1cGRhdGUtcmVzJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9sZWFkc2VsZWN0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5sZWFkID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBsZWFkOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgJ29ubGVhZHJlcycpXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzZWxmLmxlYWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHJlcy5kYXRhW2luZGV4ICsgMV0ubGlrZXRhcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNlbGYuY29sb3JbaW5kZXhdID0gJyNlMDk2NjQnXG4gICAgICAgICAgICBzZWxmLmltZ2xpa2VbaW5kZXhdID0gJy4uL2ltYWdlcy9hZnRlcmxpa2UucG5nJ1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmltZ2xpa2VbaW5kZXhdID0gJy4uL2ltYWdlcy90aHVtYnN1cC5wbmcnXG4gICAgICAgICAgICBzZWxmLmNvbG9yW2luZGV4XSA9ICcjYmZiZmJmJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19