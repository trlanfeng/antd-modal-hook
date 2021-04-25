import React, { FC, useState } from 'react';

export interface ModalProps {
  data?: any;
  title?: string;
  visible?: boolean;
  onCancel?: () => void;
  onOk?: (data?: any) => void;
  maskClosable?: boolean;
}

export const useModal = (
  Component: FC<ModalProps>,
  params?: ModalProps,
): [FC, (value: boolean) => void, (value: any) => void] => {
  const { visible, onCancel, title, onOk, data } = params || {};
  const [modalVisible, setModalVisible] = useState<boolean>(visible || false);
  const [modalData, setModalData] = useState<any>(data || {});

  const ModalComponent: FC = () => (
    <>
      {modalVisible ? (
        <Component
          data={modalData}
          visible={modalVisible}
          title={title}
          onCancel={() => {
            setModalVisible(false);
            onCancel?.();
          }}
          onOk={() => {
            setModalVisible(false);
            onOk?.();
          }}
        />
      ) : null}
    </>
  );

  return [ModalComponent, setModalVisible, setModalData];
};

type ModalHookResult = [
  ModalProps,
  React.Dispatch<React.SetStateAction<boolean>>,
  React.Dispatch<any>,
];

export const useModalProps = (props?: ModalProps): ModalHookResult => {
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<any>(props?.data || {});
  return [
    {
      ...props,
      visible,
      data,
      onOk(value?: any) {
        setVisible(false);
        props?.onOk?.(value);
      },
      onCancel() {
        setVisible(false);
        props?.onCancel?.();
      },
    },
    setVisible,
    setData,
  ];
};
