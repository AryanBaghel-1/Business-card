import { Button } from "@/components/ui/button";
import { useDownload } from "@/hooks/useDownload";
import { Download, FileImage, FileText, Loader2 } from "lucide-react";

export function DownloadButtons() {
  const { isDownloading, error, downloadPng, downloadPdf } = useDownload("business-card-preview", "my-business-card");

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="flex flex-wrap justify-center gap-4 w-full">
        <Button 
          onClick={downloadPng} 
          disabled={isDownloading}
          className="flex-1 sm:flex-none min-w-[160px]"
        >
          {isDownloading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileImage className="w-4 h-4 mr-2" />}
          Download PNG
        </Button>
        <Button 
          onClick={downloadPdf} 
          variant="secondary"
          disabled={isDownloading}
          className="flex-1 sm:flex-none min-w-[160px]"
        >
          {isDownloading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileText className="w-4 h-4 mr-2" />}
          Download PDF
        </Button>
      </div>
      {error && (
        <p className="text-sm text-destructive mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
