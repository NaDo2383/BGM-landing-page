"use client"

import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { uploadImage } from "@/lib/uploadImage"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function NewsAdminPage() {
  const [news, setNews] = useState<any[]>([])
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null as File | null,
  })
  const [editingId, setEditingId] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("admin") === "true"
    if (!isLoggedIn) {
      router.push("/admin/login")
    } else {
      fetchNews()
    }
  }, [])

  const fetchNews = async () => {
    const res = await axios.get("/api/news")
    setNews(res.data)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    let imageUrl = ""

    if (form.image) {
      imageUrl = await uploadImage(form.image)
    }

    const payload = {
      title: form.title,
      description: form.description,
      ...(imageUrl && { imageUrl }),
    }

    if (editingId) {
      await axios.put(`/api/news/${editingId}`, payload)
    } else {
      await axios.post("/api/news", payload)
    }

    resetForm()
    fetchNews()
  }

  const resetForm = () => {
    setForm({ title: "", description: "", image: null })
    setEditingId(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const handleEdit = (item: any) => {
    setForm({ title: item.title, description: item.description, image: null })
    setEditingId(item.id)
  }

  const handleDelete = async (id: string) => {
    await axios.delete(`/api/news/${id}`)
    fetchNews()
  }

  return (
    <div className='p-6 max-w-5xl mx-auto bg-[#0e0e0e] min-h-screen text-white'>
      <h1 className='text-2xl font-bold mb-4'>📰 News Manager</h1>

      <form
        onSubmit={handleSubmit}
        className='mb-8 bg-[#1a1a1a] shadow p-4 rounded space-y-4'>
        <input
          type='text'
          placeholder='Title'
          className='bg-[#222] border border-gray-700 text-white px-4 py-2 w-full rounded'
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder='Description'
          className='bg-[#222] border border-gray-700 text-white px-4 py-2 w-full rounded'
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required></textarea>
        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={(e) => setForm({ ...form, image: e.target.files?.[0] || null })}
          className='block text-sm text-gray-400'
        />
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded'>
          {editingId ? "Update News" : "Add News"}
        </button>
        {editingId && (
          <button
            type='button'
            onClick={resetForm}
            className='ml-4 text-sm text-gray-400 underline'>
            Cancel Editing
          </button>
        )}
      </form>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {news.map((item) => (
          <div key={item.id} className='bg-[#1a1a1a] p-4 rounded shadow'>
            {item.imageUrl && (
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={200}
                className='w-full h-48 object-cover rounded'
              />
            )}
            <h2 className='text-lg font-semibold mt-2'>{item.title}</h2>
            <p className='text-sm text-gray-400 mb-2'>{item.description}</p>
            <div className='flex justify-between mt-2'>
              <button
                onClick={() => handleEdit(item)}
                className='text-blue-400 text-sm hover:underline'>
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className='text-red-400 text-sm hover:underline'>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
