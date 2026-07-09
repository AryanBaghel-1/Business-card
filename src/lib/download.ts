import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

const SCALE = 2; // Higher scale for better quality

export async function generateImageData(element: HTMLElement): Promise<string> {
  return await toPng(element, {
    pixelRatio: SCALE,
    backgroundColor: 'rgba(0,0,0,0)', // Transparent background
    style: {
      transform: 'scale(1)',
    },
  });
}

export async function downloadAsImage(element: HTMLElement, filename: string) {
  const dataUrl = await generateImageData(element);
  
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = `${filename}.png`;
  link.click();
}

export async function downloadAsPDF(element: HTMLElement, filename: string) {
  const dataUrl = await generateImageData(element);
  
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  
  const pdf = new jsPDF({
    orientation: width > height ? 'landscape' : 'portrait',
    unit: 'px',
    format: [width, height]
  });

  pdf.addImage(dataUrl, 'PNG', 0, 0, width, height);
  pdf.save(`${filename}.pdf`);
}
