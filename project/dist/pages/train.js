'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _leadtable = require('./../components/leadtable.js');

var _leadtable2 = _interopRequireDefault(_leadtable);

var _lead = require('./../util/lead.js');

var _lead2 = _interopRequireDefault(_lead);

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
      navigationBarTitleText: '我的书评'
    }, _this.$repeat = { "list": { "com": "leadtable", "props": "open" } }, _this.$props = { "leadtable": { "xmlns:v-bind": { "value": "", "for": "list", "item": "getinfo", "index": "index", "key": "index" }, "v-bind:open.once": { "value": "getinfo", "type": "item", "for": "list", "item": "getinfo", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "list", "item": "getinfo", "index": "index", "key": "index" } } }, _this.$events = { "leadtable": { "v-on:childFn": "parentFn" } }, _this.components = {
      leadtable: _leadtable2.default
    }, _this.data = {
      list: _lead2.default
    }, _this.methods = {
      parentFn: function parentFn(num) {
        console.log(num);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
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

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxlYWR0YWJsZSIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsInBhcmVudEZuIiwibnVtIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLFdBQVAsRUFBbUIsU0FBUSxNQUEzQixFQUFSLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxNQUFsQixFQUF5QixRQUFPLFNBQWhDLEVBQTBDLFNBQVEsT0FBbEQsRUFBMEQsT0FBTSxPQUFoRSxFQUFoQixFQUF5RixvQkFBbUIsRUFBQyxTQUFRLFNBQVQsRUFBbUIsUUFBTyxNQUExQixFQUFpQyxPQUFNLE1BQXZDLEVBQThDLFFBQU8sU0FBckQsRUFBK0QsU0FBUSxPQUF2RSxFQUErRSxPQUFNLE9BQXJGLEVBQTVHLEVBQTBNLGNBQWEsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLE1BQWxCLEVBQXlCLFFBQU8sU0FBaEMsRUFBMEMsU0FBUSxPQUFsRCxFQUEwRCxPQUFNLE9BQWhFLEVBQXZOLEVBQWIsRSxRQUNUQyxPLEdBQVUsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsVUFBaEIsRUFBYixFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDO0FBREssSyxRQUlQQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDQ0MsR0FERCxFQUNNO0FBQ1pDLGdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUhPLEs7Ozs7OzZCQU1ELENBQ1I7Ozt3Q0FFbUI7QUFDbEJHLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OztFQTdCZ0MsZUFBS0MsSTs7a0JBQW5CakIsSyIsImZpbGUiOiJ0cmFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgTGVhZHRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvbGVhZHRhYmxlJ1xuICBpbXBvcnQgbGVhZCBmcm9tICcuLi91dGlsL2xlYWQnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5Lmm6K+EJ1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHtcImxpc3RcIjp7XCJjb21cIjpcImxlYWR0YWJsZVwiLFwicHJvcHNcIjpcIm9wZW5cIn19O1xyXG4kcHJvcHMgPSB7XCJsZWFkdGFibGVcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcImdldGluZm9cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpvcGVuLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiZ2V0aW5mb1wiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJnZXRpbmZvXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJnZXRpbmZvXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHtcImxlYWR0YWJsZVwiOntcInYtb246Y2hpbGRGblwiOlwicGFyZW50Rm5cIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGxlYWR0YWJsZTogTGVhZHRhYmxlXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IGxlYWRcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgcGFyZW50Rm4obnVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG51bSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgICAgfSwgMTAwMClcbiAgICB9XG4gIH1cbiJdfQ==