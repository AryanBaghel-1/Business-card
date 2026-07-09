import { useState } from 'react';
import { downloadAsImage, downloadAsPDF } from '@/lib/download';

export function useDownload(elementId: string, filename: string) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (type: 'png' | 'pdf') => {
    try {
      setIsDownloading(true);
      setError(null);
      
      const element = document.getElementById(elementId);
      if (!element) {
        throw new Error('Card element not found');
      }

      if (type === 'png') {
        await downloadAsImage(element, filename);
      } else {
        await downloadAsPDF(element, filename);
      }
    } catch (err) {
      console.error('Download failed:', err);
      setError(err instanceof Error ? err.message : 'Download failed');
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    isDownloading,
    error,
    downloadPng: () => handleDownload('png'),
    downloadPdf: () => handleDownload('pdf'),
  };
}
