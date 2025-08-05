import { useEffect, useState } from "react";
import PointerIcon from "../../assets/cursor/cursor_point.svg?react";
import ClickIcon from "../../assets/cursor/cursor_1_click.svg?react";
import DragIcon from "../../assets/cursor/cursor_1_drag.svg?react";
import CopyIcon from "../../assets/cursor/cursor_1_copy.svg?react";

type CursorType = "pointer" | "click" | "drag" | "copy";

const cursorMap: Record<CursorType, string> = {
  pointer: "cursor-pointer",
  click: "cursor-pointer",
  drag: "cursor-grab",
  copy: "cursor-copy",
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<CursorType>("pointer");

  useEffect(() => {
    const moveAndDetect = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
  
      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      
  
      if (target?.closest(".cursor-click")) {
        
        setCursorType("click");
      } else if (target?.closest(".cursor-drag")) {
        
        setCursorType("drag");
      } else if (target?.closest(".cursor-copy")) {
        
        setCursorType("copy");
      } else {
        
        setCursorType("pointer");
      }
    };
  
    window.addEventListener("mousemove", moveAndDetect);
  
    return () => window.removeEventListener("mousemove", moveAndDetect);
  }, []);
  

  const renderCursorIcon = () => {
    const style = {
      position: "fixed" as const,
      top: position.y,
      left: position.x,
      pointerEvents: "none" as const,
      transform: "translate(-50%, -50%)",
      width: 40,
      height: 40,
      zIndex: 2147483647,
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
      default:
        return <PointerIcon style={style} />;
    }
  };

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        className={cursorMap[cursorType]}
        style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}
      >
        {renderCursorIcon()}
      </div>
      
    </>
  );
};

export default CustomCursor;
