import { FC } from 'react';
export interface ModalProps {
    data?: any;
    title?: string;
    visible?: boolean;
    onCancel?: () => void;
    onOk?: (data?: any) => void;
}
declare type ModalResult = [FC<any>, (value: boolean) => void, (value: any) => void];
export declare const useModal: (Component: any, params?: ModalProps) => ModalResult;
export {};
