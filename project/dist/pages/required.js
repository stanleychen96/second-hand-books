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
      navigationBarTitleText: '觅书处'
    }, _this.data = {
      book: '../images/WechatIMG165.jpeg',
      focus: false,
      inputValue: '',
      placeholder: '输入你想寻找的二手书'

    }, _this.methods = {
      bindButtonTap: function bindButtonTap() {
        _wepy2.default.navigateTo({
          url: './search'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      // console.log(option)
      // let self = this
      // self.a = option.a
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/required'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVpcmVkLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJib29rIiwiZm9jdXMiLCJpbnB1dFZhbHVlIiwicGxhY2Vob2xkZXIiLCJtZXRob2RzIiwiYmluZEJ1dHRvblRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvcHRpb24iLCJzZXRUaW1lb3V0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLDZCQUREO0FBRUxDLGFBQU8sS0FGRjtBQUdMQyxrQkFBWSxFQUhQO0FBSUxDLG1CQUFhOztBQUpSLEssUUFRUEMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNRO0FBQ2QsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7OzsyQkFTSEMsTSxFQUFRO0FBQ2I7QUFDQTtBQUNBO0FBQ0Q7Ozt3Q0FDbUI7QUFDbEJDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7OztFQS9CZ0MsZUFBS0MsSTs7a0JBQW5CZixLIiwiZmlsZSI6InJlcXVpcmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+inheS5puWkhCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgYm9vazogJy4uL2ltYWdlcy9XZWNoYXRJTUcxNjUuanBlZycsXG4gICAgZm9jdXM6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIHBsYWNlaG9sZGVyOiAn6L6T5YWl5L2g5oOz5a+75om+55qE5LqM5omL5LmmJ1xuXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGJpbmRCdXR0b25UYXAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3NlYXJjaCdcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgLy8gY29uc29sZS5sb2cob3B0aW9uKVxuICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIHNlbGYuYSA9IG9wdGlvbi5hXG4gIH1cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfSwgMTAwMClcbiAgfVxufVxuIl19