import { useEffect, useState, useRef } from "react";
import PointerIcon from "../../assets/cursor/cursor_point.svg?react";
import ClickIcon from "../../assets/cursor/cursor_1_click.svg?react";
import DragIcon from "../../assets/cursor/cursor_1_drag.svg?react";
import CopyIcon from "../../assets/cursor/cursor_1_copy.svg?react";
import BackIcon from "../../assets/cursor/cursor_back.svg?react";
import SwipeIcon from "../../assets/cursor/cursor_swipe.svg?react";

type CursorType = "pointer" | "click" | "drag" | "copy" | "back" | "swipe";

const cursorMap: Record<CursorType, string> = {
  pointer: "cursor-pointer",
  click: "cursor-pointer",
  drag: "cursor-grab",
  copy: "cursor-copy",
  back: "cursor-back",
  swipe: "cursor-swipe",
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<CursorType>("pointer");
  const [visible, setVisible] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const hideCursorAfterTimeout = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setVisible(false), 2000);
    };

    const moveAndDetect = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;

      if (target?.closest(".cursor-click")) {
        setCursorType("click");
      } else if (target?.closest(".cursor-drag")) {
        setCursorType("drag");
      } else if (target?.closest(".cursor-copy")) {
        setCursorType("copy");
      } else if (target?.closest(".cursor-back")) {
        setCursorType("back");
      } else if (target?.closest(".cursor-swipe")) {
        setCursorType("swipe");
      } else {
        setCursorType("pointer");
      }

      hideCursorAfterTimeout();
    };

    window.addEventListener("mousemove", moveAndDetect);
    hideCursorAfterTimeout(); // Initial Start des Timers

    return () => {
      window.removeEventListener("mousemove", moveAndDetect);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const renderCursorIcon = () => {
    const style = {
      position: "fixed" as const,
      top: position.y,
      left: position.x,
      pointerEvents: "none" as const,
      transform: "translate(-50%, -50%)",
      width: 50,
      height: 50,
      zIndex: 2147483647,
      opacity: visible ? 1 : 0,
      transition: "opacity 0.3s ease",
    };

    switch (cursorType) {
      case "pointer":
        return <PointerIcon style={style} />;
      case "click":
        return <ClickIcon style={style} />;
      case "drag":
        return <DragIcon style={style} />;
      case "copy":
        return <CopyIcon style={style} />;
      case "back":
        return <BackIcon style={style} />;
      case "swipe":
        return <SwipeIcon style={style} />;
      default:
        return <PointerIcon style={style} />;
    }
  };

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        className={cursorMap[cursorType]}
        style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 2147483647 }}
      >
        {renderCursorIcon()}
      </div>
    </>
  );
};

export default CustomCursor;
