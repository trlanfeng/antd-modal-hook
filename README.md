antd-modal-hook

适用于`ant design`的`modal hook`，更简单、通用的调用弹框组件

# usage

## modal component

```
import React from 'react';
import { Modal } from 'antd';
import { ModalProps } from 'antd-modal-hook';

const Uploader: FC<ModalProps> = ({ visible, onOk, onCancel }) => {
  return (
    <Modal
      visible={visible}
      title='Report'
      onOk={() => {
        // submit form or something else
        onOk?.();
      }}
      onCancel={onCancel}
    >
      ...
    </Modal>
  );
};

export default Uploader;
```

## use the modal in other components

```
const [basicEditorProps, setBasicEditorVisible, setBasicEditorData] = useModalProps({
  onOk() {
    refetch();
  },
});

...

<UploaderModal {...basicEditorProps} />
```

## deprecated: use the modal in other components

```
const [UploaderModal, setUploaderVisible, setUploaderData] = useModal(
  Uploader,
  {
    onOk() {
      refetch();
    },
  }
);

...

<UploaderModal />
```

## changelog

# 0.1.0

增加并建议使用`useModalProps`，不建议使用`useModal`，有性能问题。使用方法略微修改。