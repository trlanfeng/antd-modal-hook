import React, { FC, useState } from 'react';

export interface ModalProps {
  data?: any;
  title?: string;
  visible?: boolean;
  onCancel?: () => void;
  onOk?: (data?: any) => void;
}

type ModalResult = [FC<any>, (value: boolean) => void, (value: any) => void];

export const useModal = (
  Component: FC<ModalProps & any>,
  params?: ModalProps
): ModalResult => {
  const { visible, onCancel, title, onOk, data } = params || {};
  const [modalVisible, setModalVisible] = useState<boolean>(visible || false);
  const [modalData, setModalData] = useState<any>(data || {});

  const ModalComponent: FC<any> = (props) => (
    <>
      {modalVisible ? (
        <Component
          {...props}
          data={modalData}
          visible={modalVisible}
          title={title}
          onCancel={() => {
            setModalVisible(false);
            onCancel?.();
          }}
          onOk={(data: any) => {
            setModalVisible(false);
            onOk?.(data);
          }}
        />
      ) : null}
    </>
  );

  return [ModalComponent, setModalVisible, setModalData];
};
