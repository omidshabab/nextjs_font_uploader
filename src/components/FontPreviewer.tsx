"use client";

import React from 'react';

interface FontPreviewerProps {
     fontUrl: string;
     fontName: string;
}

const FontPreviewer: React.FC<FontPreviewerProps> = ({ fontUrl, fontName }) => {
     const fontFace = `
    @font-face {
      font-family: '${fontName}';
      src: url('${fontUrl}') format('truetype');
    }
  `;

     return (
          <div>
               {/* Inject custom font style */}
               <style>{fontFace}</style>

               {/* Apply custom font dynamically */}
               <p style={{ fontFamily: fontName }}>This is a preview of the uploaded font!</p>
          </div>
     );
};

export default FontPreviewer;
