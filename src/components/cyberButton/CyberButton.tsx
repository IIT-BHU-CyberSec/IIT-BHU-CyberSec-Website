import React from "react";
import "./cyberButton.css";

interface CyberButtonProps {
  href: string;
  prompt: string;
}

const CyberButton: React.FC<CyberButtonProps> = ({ href, prompt }) => {
  return (
    <a
      href={href}
      className="cyber-btn"
      style={{ "--content": `'${prompt}'` } as React.CSSProperties}
    >
      <div className="left"></div>
      {prompt}
      <div className="right"></div>
    </a>
  );
};

export default CyberButton;
