// app/api/news/[id]/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { adminDB } from "@/lib/firebase-admin";
import { NextResponse } from "next/server";

/** GET /api/news/:id */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const snap = await adminDB.collection("news").doc(id).get();
    if (!snap.exists) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json({ id: snap.id, ...(snap.data() ?? {}) });
  } catch (err) {
    console.error("[GET /api/news/:id] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

/** PUT /api/news/:id */
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    await adminDB.collection("news").doc(id).update(body as Record<string, unknown>);
    return NextResponse.json({ message: "Updated" });
  } catch (err: any) {
    const code = err?.code;
    if (code === "not-found" || code === 5) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    console.error("[PUT /api/news/:id] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

/** DELETE /api/news/:id */
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    await adminDB.collection("news").doc(id).delete();
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    console.error("[DELETE /api/news/:id] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
