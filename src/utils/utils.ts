export async function renderPdfFirstPageToDivBg(pdfUrl: string, targetDivId: string) {
  if (typeof window === "undefined") throw new Error("Client only")

  const { getDocument, GlobalWorkerOptions, version } = await import("pdfjs-dist")
  GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.mjs`


  const res = await fetch(pdfUrl)
  if (!res.ok) throw new Error(`Proxy returned ${res.status}`)
  const buf = await res.arrayBuffer()

  // 2) Use bytes directly (no URL, no range/stream needed)
  const loadingTask = getDocument({
    data: new Uint8Array(buf),
    cMapUrl: `https://unpkg.com/pdfjs-dist@${version}/cmaps/`,
    cMapPacked: true,
    disableRange: true,
    disableStream: true,
  })

  const pdf = await loadingTask.promise
  const page = await pdf.getPage(1)
  const viewport = page.getViewport({ scale: 2 })

  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")!
  canvas.width = Math.ceil(viewport.width)
  canvas.height = Math.ceil(viewport.height)

  await page.render({ canvasContext: ctx, viewport, intent: "display" }).promise

  const dataUrl = canvas.toDataURL("image/png")
  const el = document.getElementById(targetDivId)
  if (el) {
    el.style.backgroundImage = `url("${dataUrl}")`
    el.style.backgroundSize = "cover"
    el.style.backgroundPosition = "center"
    el.style.backgroundRepeat = "no-repeat"
  }

  await pdf.cleanup()
  await pdf.destroy()
}


import { useCallback } from "react";

export function useScrollToId(defaultOffset = 80) {
  return useCallback((id: string, offset = defaultOffset) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [defaultOffset]);
}

// utils/timeAgo.ts
export function timeAgoFromMs(createdAtMs: number, nowMs = Date.now()): string {
  const diffMs = nowMs - createdAtMs;            // negative means future
  const absMs = Math.abs(diffMs);

  const sec = Math.floor(absMs / 1000);
  const min = Math.floor(sec / 60);
  const hrs = Math.floor(min / 60);
  const days = Math.floor(hrs / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  const fmt = (n: number, u: string) => `${n} ${u}${n !== 1 ? "s" : ""}`;
  const suffix = diffMs >= 0 ? "ago" : "from now";

  let val: string;
  if (sec < 60) val = fmt(sec, "second");
  else if (min < 60) val = fmt(min, "minute");
  else if (hrs < 24) val = fmt(hrs, "hour");
  else if (days < 30) val = fmt(days, "day");
  else if (months < 12) val = fmt(months, "month");
  else val = fmt(years, "year");

  return `${val} ${suffix}`;
}
