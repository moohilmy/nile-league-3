"use client";
import { useState } from "react";
import { Share,CheckCheck } from "lucide-react";
export default function CopyUrlButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      disabled={copied}
      className="flex items-center gap-2 text-sm text-white  transition capitalize"
    >
      {copied ? 'copied' : 'share'}
      {copied ? <CheckCheck /> : <Share />}
    </button>
  );
}
