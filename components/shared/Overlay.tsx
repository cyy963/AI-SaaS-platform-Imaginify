import { Button } from "@/components/ui/button";
import React from 'react';

// Define a type for the props
type OverlayProps = {
    preLinkText: string;
    linkText: string;
    linkUrl: string;
    onClose: () => void;
};

const Overlay: React.FC<OverlayProps> = ({ preLinkText, linkText, linkUrl, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center max-w-sm w-full mx-4">
          <p className="text-black text-center mb-6">
            {preLinkText} <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">{linkText}</a>
          </p>
          <Button onClick={onClose} variant="default">
            Dismiss
          </Button>
        </div>
      </div>
    );
};

export default Overlay;
