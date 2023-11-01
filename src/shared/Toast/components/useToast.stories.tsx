import type { Meta, StoryObj } from '@storybook/react';
import useToast from '../hooks/useToast';
import Toast from './Toast';

const DefaultPage = () => {
  const [show, toast, handleOpenToast, handleCloseToast] = useToast(3000);

  return (
    <>
      <button onClick={handleOpenToast}>Click Me!</button>
      {show && (
        <Toast
          text="구매되었습니다"
          type="confirm"
          toast={toast}
          handleCloseToast={handleCloseToast}
        />
      )}
    </>
  );
};

const meta = {
  title: 'Components/Toast',
  component: DefaultPage
} satisfies Meta<typeof DefaultPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
