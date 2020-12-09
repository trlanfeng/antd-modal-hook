antd-modal-hook

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