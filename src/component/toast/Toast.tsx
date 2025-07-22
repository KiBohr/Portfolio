import React from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // auto-close after 2 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className=" text-sm fixed top-35 left-1/2 transform -translate-x-1/2 z-50"
      role="alert"
    >
      {message}
    </div>
  );
}
