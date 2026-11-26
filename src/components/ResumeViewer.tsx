import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Must be set in the same module that renders <Document>.
pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

const status = "grid h-64 place-items-center text-sm text-muted";

export default function ResumeViewer({ file }: { file: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();
  const [pages, setPages] = useState(0);

  // Render pages at the container's width so they stay sharp and fit on phones.
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} className="overflow-hidden rounded-xl border border-border bg-white">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setPages(numPages)}
        loading={<div className={status}>Loading resume…</div>}
        error={<div className={status}>Couldn't load the preview. Use the download link below.</div>}
      >
        {width &&
          Array.from({ length: pages }, (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              width={width}
              loading={null}
              className={i > 0 ? "border-t border-border" : undefined}
            />
          ))}
      </Document>
    </div>
  );
}
