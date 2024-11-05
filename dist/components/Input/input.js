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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, } from 'react';
var Input = function (_a) {
    var addonAfter = _a.addonAfter, addonBefore = _a.addonBefore, allowClear = _a.allowClear, classNames = _a.classNames, count = _a.count, defaultValue = _a.defaultValue, _b = _a.disabled, disabled = _b === void 0 ? false : _b, id = _a.id, maxLength = _a.maxLength, prefix = _a.prefix, showCount = _a.showCount, status = _a.status, styles = _a.styles, _c = _a.size, size = _c === void 0 ? 'middle' : _c, suffix = _a.suffix, _d = _a.type, type = _d === void 0 ? 'text' : _d, propValue = _a.value, _e = _a.variant, variant = _e === void 0 ? 'outlined' : _e, onChange = _a.onChange, onPressEnter = _a.onPressEnter, onClear = _a.onClear;
    var _f = useState(defaultValue || ''), value = _f[0], setValue = _f[1];
    useEffect(function () {
        if (propValue !== undefined) {
            setValue(propValue);
        }
    }, [propValue]);
    var handleChange = function (e) {
        setValue(e.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    var handleClear = function () {
        setValue('');
        onClear === null || onClear === void 0 ? void 0 : onClear();
    };
    var handleKeyDown = function (e) {
        if (e.key === 'Enter') {
            onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(e);
        }
    };
    var renderCount = function () {
        var _a;
        if (!showCount)
            return null;
        var countInfo = { value: value, count: value.length, maxLength: maxLength };
        return typeof showCount === 'boolean'
            ? "".concat(value.length).concat(maxLength ? " / ".concat(maxLength) : '')
            : (_a = showCount.formatter) === null || _a === void 0 ? void 0 : _a.call(showCount, countInfo);
    };
    return (_jsxs("div", __assign({ className: "input-container ".concat(size, " ").concat(variant, " ").concat(status || '', " ").concat(disabled ? 'disabled' : '', " ").concat((classNames === null || classNames === void 0 ? void 0 : classNames.container) || ''), style: styles === null || styles === void 0 ? void 0 : styles.container }, { children: [addonBefore && _jsx("span", __assign({ className: "input-addon before" }, { children: addonBefore })), _jsxs("div", __assign({ className: "input-wrapper", style: styles === null || styles === void 0 ? void 0 : styles.inputWrapper }, { children: [prefix && _jsx("span", __assign({ className: "input-prefix" }, { children: prefix })), _jsx("input", { id: id, type: type, value: value, disabled: disabled, maxLength: maxLength, onChange: handleChange, onKeyDown: handleKeyDown, className: "input-field ".concat((classNames === null || classNames === void 0 ? void 0 : classNames.inputField) || ''), style: styles === null || styles === void 0 ? void 0 : styles.inputField }), allowClear && value && (_jsx("span", __assign({ className: "input-clear", onClick: handleClear }, { children: typeof allowClear === 'object' ? allowClear.clearIcon : '✖' }))), suffix && _jsx("span", __assign({ className: "input-suffix" }, { children: suffix }))] })), addonAfter && _jsx("span", __assign({ className: "input-addon after" }, { children: addonAfter })), renderCount() && _jsx("span", __assign({ className: "input-count" }, { children: renderCount() }))] })));
};
export default Input;
