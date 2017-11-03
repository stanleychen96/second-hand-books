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
      navigationBarTitleText: '书评正文'
    }, _this.data = {
      item: '',
      title: 'title很长很长很长很长很长很长很长很长很长很长很长很长',
      avatarUrl: '',
      authorName: 'name',
      img: '',
      text: 'ssssssssssssssssssssssssssssss',
      signature: '生活哲学探寻者'
    }, _this.methods = {
      attent: function attent(e) {
        _wepy2.default.request({
          url: ''
        });
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/leadcontent'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRjb250ZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpdGVtIiwidGl0bGUiLCJhdmF0YXJVcmwiLCJhdXRob3JOYW1lIiwiaW1nIiwidGV4dCIsInNpZ25hdHVyZSIsIm1ldGhvZHMiLCJhdHRlbnQiLCJlIiwicmVxdWVzdCIsInVybCIsInNldFRpbWVvdXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxhQUFPLCtCQUZGO0FBR0xDLGlCQUFXLEVBSE47QUFJTEMsa0JBQVksTUFKUDtBQUtMQyxXQUFLLEVBTEE7QUFNTEMsWUFBTSxnQ0FORDtBQU9MQyxpQkFBVztBQVBOLEssUUFTUEMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLENBREMsRUFDRTtBQUNSLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSztBQURNLFNBQWI7QUFJRDtBQU5PLEs7Ozs7OzZCQVNELENBRVI7Ozt3Q0FDbUI7QUFDbEJDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OztFQTdCZ0MsZUFBS0MsSTs7a0JBQW5CbEIsSyIsImZpbGUiOiJsZWFkY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuabor4TmraPmlocnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpdGVtOiAnJyxcbiAgICB0aXRsZTogJ3RpdGxl5b6I6ZW/5b6I6ZW/5b6I6ZW/5b6I6ZW/5b6I6ZW/5b6I6ZW/5b6I6ZW/5b6I6ZW/5b6I6ZW/5b6I6ZW/5b6I6ZW/5b6I6ZW/JyxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIGF1dGhvck5hbWU6ICduYW1lJyxcbiAgICBpbWc6ICcnLFxuICAgIHRleHQ6ICdzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3MnLFxuICAgIHNpZ25hdHVyZTogJ+eUn+a0u+WTsuWtpuaOouWvu+iAhSdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGF0dGVudChlKSB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICcnXG4gICAgICB9KVxuXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19