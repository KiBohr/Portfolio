import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 1500);
    return () => clearTimeout(timer);
  }, [onClose]);

  // Portal goes to <body>
  return createPortal(
    <div
      className="text-sm text-green font-[AnPro] fixed top-70 md:top-75 left-1/2 transform -translate-x-1/2 z-50  pointer-events-none"
      role="alert"
    >
      {message}
    </div>,
    document.body
  );
}
