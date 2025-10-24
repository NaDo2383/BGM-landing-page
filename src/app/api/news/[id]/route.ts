export const dynamic = "force-dynamic"

import { adminDB } from "@/lib/firebase-admin"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// Helper: normalize Firestore Timestamp → ISO + millis (keeps original if already string/number)
function normalizeTimestamp(ts: any) {
  try {
    if (ts && typeof ts.toDate === "function") {
      const d = ts.toDate() as Date
      return { iso: d.toISOString(), ms: d.getTime() }
    }
    if (ts && typeof ts._seconds === "number") {
      const ms = ts._seconds * 1000 + Math.floor((ts._nanoseconds ?? 0) / 1e6)
      return { iso: new Date(ms).toISOString(), ms }
    }
    if (typeof ts === "number") return { iso: new Date(ts).toISOString(), ms: ts }
    if (typeof ts === "string") return { iso: new Date(ts).toISOString(), ms: Date.parse(ts) }
  } catch { }
  return ts
}

/**
 * GET /api/news/:id
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 })
    }

    const snap = await adminDB.collection("news").doc(id).get()
    if (!snap.exists) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    const data = snap.data() || {}

    return NextResponse.json({
      id: snap.id,
      ...data,
    })
  } catch (err) {
    console.error("[GET /api/news/:id] Error:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

/**
 * PUT /api/news/:id
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 })
    }

    const body = await req.json()
    await adminDB.collection("news").doc(id).update(body)

    return NextResponse.json({ message: "Updated" })
  } catch (err: any) {
    // If doc doesn't exist, Firestore throws
    if (err?.code === 5 /* not-found */) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }
    console.error("[PUT /api/news/:id] Error:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

/**
 * DELETE /api/news/:id
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 })
    }

    await adminDB.collection("news").doc(id).delete()
    return NextResponse.json({ message: "Deleted" })
  } catch (err) {
    console.error("[DELETE /api/news/:id] Error:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
