import { createRoot } from 'react-dom/client';
import ToastManager from './ToastManager';

class Toast {
  createToast:
    | ((
        toastOption: { status: string; message: string },
        duration: number
      ) => void)
    | null = null;

  constructor() {
    const portalElement = document.getElementById(
      'portal-toast'
    ) as HTMLElement;

    const element = createRoot(portalElement);

    element.render(
      <ToastManager
        bind={(createToast) => {
          this.createToast = createToast;
        }}
      />
    );
  }

  show(
    toastOption: {
      status: string;
      message: string;
      icon?: boolean;
      subText?: string;
    },
    duration = 2000
  ) {
    if (typeof this.createToast === 'function') {
      this.createToast(toastOption, duration);
    } else {
      console.error('createToast is not a function');
    }
  }
}

const ToastComponent = new Toast();

export default ToastComponent;
