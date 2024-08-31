"use client";

import React, { useState } from 'react';

interface FontUploaderProps {
     onUpload: (url: string) => void;
}

const FontUploader: React.FC<FontUploaderProps> = ({ onUpload }) => {
     const [fontUrl, setFontUrl] = useState<string | null>(null);

     const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);

          const response = await fetch('/api/upload', {
               method: 'POST',
               body: formData,
          });

          if (response.ok) {
               const data = await response.json();
               const uploadedFontUrl = data.filePath;
               setFontUrl(uploadedFontUrl);
               onUpload(uploadedFontUrl); // Pass the URL to the callback prop
          } else {
               console.error('Failed to upload font');
          }
     };

     return (
          <div className="max-w-md mx-auto">
               <form onSubmit={handleUpload} className="flex flex-col items-center gap-4">
                    <input
                         type="file"
                         name="font"
                         accept=".ttf,.woff,.woff2,.otf"
                         required
                         className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Upload Font</button>
               </form>
               {fontUrl && (
                    <div className="mt-4 p-4 border rounded bg-green-50 text-zinc-900">
                         <p>Font uploaded successfully! You can use it with the following URL:</p>
                         <code className="break-all">{fontUrl}</code>
                    </div>
               )}
          </div>
     );
};

export default FontUploader;
