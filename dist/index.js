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
import React, { useState } from 'react';
export var useModal = function (Component, params) {
    var _a = params || {}, visible = _a.visible, onCancel = _a.onCancel, title = _a.title, onOk = _a.onOk, data = _a.data;
    var _b = useState(visible || false), modalVisible = _b[0], setModalVisible = _b[1];
    var _c = useState(data || {}), modalData = _c[0], setModalData = _c[1];
    var ModalComponent = function () { return (React.createElement(React.Fragment, null, modalVisible ? (React.createElement(Component, { data: modalData, visible: modalVisible, title: title, onCancel: function () {
            setModalVisible(false);
            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
        }, onOk: function () {
            setModalVisible(false);
            onOk === null || onOk === void 0 ? void 0 : onOk();
        } })) : null)); };
    return [ModalComponent, setModalVisible, setModalData];
};
export var useModalProps = function (props) {
    var _a = useState(false), visible = _a[0], setVisible = _a[1];
    var _b = useState((props === null || props === void 0 ? void 0 : props.data) || {}), data = _b[0], setData = _b[1];
    return [
        __assign(__assign({}, props), { visible: visible,
            data: data,
            onOk: function (value) {
                var _a;
                setVisible(false);
                (_a = props === null || props === void 0 ? void 0 : props.onOk) === null || _a === void 0 ? void 0 : _a.call(props, value);
            },
            onCancel: function () {
                var _a;
                setVisible(false);
                (_a = props === null || props === void 0 ? void 0 : props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props);
            } }),
        setVisible,
        setData,
    ];
};
