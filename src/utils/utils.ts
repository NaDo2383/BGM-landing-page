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
