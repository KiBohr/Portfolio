import  { useState } from 'react';
import Toast from '../toast/Toast';

interface CopiedContentProps  {
    text?:  string
}

function CopiedContent({text}: CopiedContentProps) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text || '');
      setCopied(true);
      setShowToast(true)
      setTimeout(() => setCopied(false), 1500); // Reset after 1.5 seconds
      console.log("email copied")
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    
    <>
      <span
        onClick={handleCopy}
        style={{ cursor: text ? "pointer" : "default", userSelect: "all" }}
        title="Click to copy"
        className="font-mono"
      >
        {text || ""}
      </span>

      {showToast && (
        <Toast
          message="copied"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
      
  );
}

export default CopiedContent

