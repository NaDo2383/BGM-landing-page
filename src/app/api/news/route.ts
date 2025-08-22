//src\app\api\news\route.ts
import { adminDB } from "@/lib/firebase-admin"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  const snapshot = await adminDB.collection("news").get()
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  try {
    const { title, description, imageUrl } = await req.json()
    const ref = await adminDB.collection("news").add({
      title,
      description,
      imageUrl,
      createdAt: new Date(),
    })
    return NextResponse.json({ id: ref.id }, { status: 201 })
  } catch (err) {
    console.error("[POST /api/news] Error:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

