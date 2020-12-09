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
    var ModalComponent = function (props) { return (React.createElement(React.Fragment, null, modalVisible ? (React.createElement(Component, __assign({}, props, { data: modalData, visible: modalVisible, title: title, onCancel: function () {
            setModalVisible(false);
            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
        }, onOk: function (data) {
            setModalVisible(false);
            onOk === null || onOk === void 0 ? void 0 : onOk(data);
        } }))) : null)); };
    return [ModalComponent, setModalVisible, setModalData];
};
