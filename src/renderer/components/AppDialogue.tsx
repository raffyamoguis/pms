import React from 'react';
import { Modal } from '@mantine/core';

interface Prop {
  opened: boolean;
  setOpened: (val: boolean) => void;
  size: string;
  title: string;
  component: React.ReactNode;
}

const AppDialogue: React.FC<Prop> = ({
  opened,
  setOpened,
  size,
  title,
  component,
}) => {
  return (
    <Modal
      size={size}
      opened={opened}
      onClose={() => setOpened(false)}
      title={title}
    >
      {/* Modal content */}
      {component}
    </Modal>
  );
};

export default AppDialogue;
