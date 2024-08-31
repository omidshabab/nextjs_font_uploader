"use client"

import React, { useState } from 'react';
import FontUploader from '@/components/FontUploader';
import FontPreviewer from '@/components/FontPreviewer';

const HomePage: React.FC = () => {
  const [fontUrl, setFontUrl] = useState<string | null>(null);

  // This function will be called after a successful font upload
  const handleFontUpload = (url: string) => {
    setFontUrl(url); // Update state with the new font URL
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload and Use Custom Fonts</h1>

      {/* Pass handleFontUpload as the onUpload prop */}
      <FontUploader onUpload={handleFontUpload} />

      {fontUrl && (
        <FontPreviewer fontUrl={fontUrl} fontName="CustomUploadedFont" />
      )}
    </div>
  );
};

export default HomePage;
