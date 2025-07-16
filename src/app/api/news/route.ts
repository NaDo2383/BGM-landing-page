import { db } from "@/lib/firebase"
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  const snapshot = await getDocs(collection(db, "news"))
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  const { title, description, imageUrl } = await req.json()
  const ref = await addDoc(collection(db, "news"), {
    title,
    description,
    imageUrl,
    createdAt: Timestamp.now(),
  })
  return NextResponse.json({ id: ref.id }, { status: 201 })
}
