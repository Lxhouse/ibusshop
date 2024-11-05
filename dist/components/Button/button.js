var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
var Button = function (props) {
    var _a;
    var _b = props.type, type = _b === void 0 ? 'default' : _b, _c = props.size, size = _c === void 0 ? 'medium' : _c, className = props.className, children = props.children, href = props.href, backgroundColor = props.backgroundColor, restProps = __rest(props, ["type", "size", "className", "children", "href", "backgroundColor"]);
    var classes = classNames('btn', className, (_a = {},
        _a["btn-".concat(type)] = type,
        _a["btn-".concat(size)] = size,
        _a));
    return type === 'link' ? (_jsx("a", __assign({ href: href, className: classes }, restProps, { children: children }))) : (_jsx("button", __assign({ className: classes, style: { backgroundColor: backgroundColor } }, restProps, { children: children })));
};
export default Button;
