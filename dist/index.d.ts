import React, { FC } from 'react';
export interface ModalProps {
    data?: any;
    title?: string;
    visible?: boolean;
    onCancel?: () => void;
    onOk?: (data?: any) => void;
    maskClosable?: boolean;
}
export declare const useModal: (Component: any, params?: ModalProps) => [any, (value: boolean) => void, (value: any) => void];
declare type ModalHookResult = [
    ModalProps,
    React.Dispatch<React.SetStateAction<boolean>>,
    React.Dispatch<any>
];
export declare const useModalProps: (props?: ModalProps) => ModalHookResult;
export {};
