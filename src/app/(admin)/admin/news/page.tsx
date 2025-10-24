"use client"

import { useEffect, useState, useRef, FormEvent, ChangeEvent } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import NewsCard from "@/components/ui/NewsCard"

const TiptapEditor = dynamic(() => import("@/components/editor/TiptapEditor"), {
  ssr: false,
})

interface NewsItem {
  id: string
  title: string
  description: string
  imageUrl?: string
}

interface NewsForm {
  title: string
  description: string
  image: File | null
}

export default function NewsAdminPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [form, setForm] = useState<NewsForm>({
    title: "",
    description: "",
    image: null,
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
  }, [router])

  const fetchNews = async (): Promise<void> => {
    const res = await axios.get<{ items: NewsItem[] }>("/api/news")
    setNews(res.data.items)
  }

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const maxSize = 5 * 1024 * 1024 // 5MB in bytes

    if (file.size > maxSize) {
      throw new Error("Image size must be 5MB or smaller.")
    }

    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "bgm_intro_web_news")
    formData.append("folder", "bgm")
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dksxwp1ci/image/upload",
      formData
    )
    return res.data.secure_url
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    let imageUrl = ""

    if (form.image) {
      imageUrl = await uploadToCloudinary(form.image)
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

  const resetForm = (): void => {
    setForm({ title: "", description: "", image: null })
    setEditingId(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const handleEdit = (item: NewsItem): void => {
    setForm({ title: item.title, description: item.description, image: null })
    setEditingId(item.id)
  }

  const handleDelete = async (id: string): Promise<void> => {
    await axios.delete(`/api/news/${id}`)
    fetchNews()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, image: e.target.files?.[0] || null })
  }

  return (
    <div className='p-6 my-28 max-w-[1240px] mx-auto bg-[#1a1a1a] text-white'>
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

        <div className='rounded overflow-hidden border border-gray-700'>
          <TiptapEditor
            content={form.description}
            onChange={(html) => setForm({ ...form, description: html })}
          />
        </div>

        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleFileChange}
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

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        {news.map((item, index) => (
          <div key={item.id} className='bg-[#1a1a1a] p-4 rounded shadow'>
            <NewsCard
              key={"newscardinadmin" + index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              id={item.id}
            />
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
