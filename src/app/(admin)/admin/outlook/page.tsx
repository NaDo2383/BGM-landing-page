"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { FormEvent, useCallback, useEffect, useState } from "react"
import {
  Loader2,
  X,
  AlertCircle,
  FileText,
  ExternalLink,
  Pencil,
  Trash2,
} from "lucide-react"

interface OutlookForm {
  title: string
  path: string
  year: number
}

interface OutlookItem {
  title: string
  path: string
  id: string
  year: number
}

interface ToastMessage {
  type: "success" | "error"
  message: string
}


export default function OutlookAdminPage() {
  const currentYear = new Date().getFullYear()

  const [form, setForm] = useState<OutlookForm>({
    title: "",
    path: "",
    year: currentYear,
  })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [outlooks, setOutlooks] = useState<OutlookItem[]>([])
  const [availableYears, setAvailableYears] = useState<number[]>([currentYear])
  const [filterYear, setFilterYear] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<ToastMessage | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const router = useRouter()

  const showToast = (type: ToastMessage["type"], message: string) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 4000)
  }

  const resetForm = (): void => {
    setForm({ title: "", path: "", year: currentYear })
    setEditingId(null)
  }

  const fetchOutlook = useCallback(async (): Promise<void> => {
    setIsLoading(true)
    try {
      const url = filterYear
        ? `/api/outlook?year=${filterYear}`
        : "/api/outlook"
      const res = await axios.get<OutlookItem[]>(url)
      setOutlooks(res.data)
      // Derive available years from data, always include current year
      const dataYears = res.data.map((item) => item.year)
      const uniqueYears = [...new Set([...dataYears, currentYear])].sort((a, b) => a - b)
      setAvailableYears(uniqueYears)
    } catch (err) {
      showToast("error", "Failed to fetch outlook items.")
      console.error("Error fetching outlooks:", err)
    } finally {
      setIsLoading(false)
    }
  }, [filterYear])

  const handleEdit = (item: OutlookItem): void => {
    setForm({ title: item.title, path: item.path, year: item.year })
    setEditingId(item.id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDelete = async (id: string): Promise<void> => {
    setIsSubmitting(true)
    try {
      await axios.delete(`/api/outlook/${id}`)
      showToast("success", "Outlook item deleted.")
      setDeleteConfirm(null)
      fetchOutlook()
    } catch (err) {
      showToast("error", "Failed to delete outlook item.")
      console.error("Error deleting outlook:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    if (!form.title.trim()) {
      showToast("error", "Title is required.")
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        title: form.title,
        path: form.path,
        year: form.year,
      }

      if (editingId) {
        await axios.put(`/api/outlook/${editingId}`, payload)
        showToast("success", "Outlook item updated!")
      } else {
        await axios.post("/api/outlook", payload)
        showToast("success", "Outlook item created!")
      }

      resetForm()
      fetchOutlook()
    } catch (err: any) {
      const msg =
        err.response?.data?.message || err.message || "An error occurred"
      showToast("error", msg)
      console.error("Error submitting outlook:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("admin") === "true"
    if (!isLoggedIn) {
      router.push("/admin/login")
    } else {
      fetchOutlook()
    }
  }, [router, fetchOutlook])

  // Group outlooks by year for display
  const groupedOutlooks = outlooks.reduce<Record<number, OutlookItem[]>>(
    (acc, item) => {
      const y = item.year
      if (!acc[y]) acc[y] = []
      acc[y].push(item)
      return acc
    },
    {}
  )

  const sortedYears = Object.keys(groupedOutlooks)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className='p-6 lg:p-10 max-w-[1240px] mx-auto text-white'>
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-top ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}>
          <AlertCircle className='w-5 h-5' />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-2'>📄 Outlook Management</h1>
        <p className='text-gray-400 text-sm'>
          Manage outlook PDF documents organized by year
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className='mb-10 bg-[#1a1a1a] shadow-xl p-6 rounded-xl space-y-5 border border-gray-800'>
        <div className='flex items-center justify-between mb-2'>
          <h2 className='text-xl font-semibold'>
            {editingId ? "Edit Outlook Item" : "Add New Outlook"}
          </h2>
          {editingId && (
            <button
              type='button'
              onClick={resetForm}
              className='text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2'>
              <X className='w-4 h-4' />
              Cancel Editing
            </button>
          )}
        </div>

        {/* Title */}
        <div>
          <label className='block text-sm font-medium mb-2 text-gray-300'>
            Title <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            placeholder='e.g. BGM Annual Outlook 2025'
            className='bg-[#222] border border-gray-700 text-white px-4 py-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Path */}
        <div>
          <label className='block text-sm font-medium mb-2 text-gray-300'>
            PDF URL / Path
          </label>
          <input
            type='text'
            placeholder='https://drive.google.com/... or /path/to/file.pdf'
            className='bg-[#222] border border-gray-700 text-white px-4 py-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
            value={form.path}
            onChange={(e) => setForm({ ...form, path: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        {/* Year */}
        <div>
          <label className='block text-sm font-medium mb-2 text-gray-300'>
            Year
          </label>
          <div className='flex gap-2'>
                        {availableYears.map((y) => (
              <button
                key={y}
                type='button'
                onClick={() => setForm({ ...form, year: y })}
                disabled={isSubmitting}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors border ${
                  form.year === y
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-[#222] border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
                }`}>
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className='flex gap-4 pt-4 border-t border-gray-800'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2'>
            {isSubmitting && <Loader2 className='w-4 h-4 animate-spin' />}
            {editingId ? "Update Outlook" : "Add Outlook"}
          </button>
          {editingId && (
            <button
              type='button'
              onClick={resetForm}
              disabled={isSubmitting}
              className='border border-gray-600 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors'>
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Year Filter Tabs */}
      <div className='flex items-center gap-2 mb-6'>
        <span className='text-sm text-gray-500 mr-2'>Filter:</span>
        <button
          onClick={() => setFilterYear(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            filterYear === null
              ? "bg-blue-600 text-white"
              : "bg-[#222] text-gray-400 hover:text-white border border-gray-700"
          }`}>
          All
        </button>
                    {availableYears.map((y) => (
          <button
            key={y}
            onClick={() => setFilterYear(y)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filterYear === y
                ? "bg-blue-600 text-white"
                : "bg-[#222] text-gray-400 hover:text-white border border-gray-700"
            }`}>
            {y}
          </button>
        ))}
      </div>

      {/* List */}
      <div>
        <h2 className='text-2xl font-bold mb-6 flex items-center justify-between'>
          <span>Outlook Items</span>
          <span className='text-sm font-normal text-gray-400'>
            {outlooks.length} {outlooks.length === 1 ? "item" : "items"}
          </span>
        </h2>

        {isLoading ? (
          <div className='flex items-center justify-center py-20'>
            <Loader2 className='w-8 h-8 animate-spin text-blue-500' />
          </div>
        ) : outlooks.length === 0 ? (
          <div className='text-center py-20 bg-[#1a1a1a] rounded-xl border border-gray-800'>
            <FileText className='w-12 h-12 text-gray-600 mx-auto mb-3' />
            <p className='text-gray-400 text-lg'>No outlook items found</p>
            <p className='text-gray-500 text-sm mt-2'>
              {filterYear
                ? `No items for ${filterYear}. Try a different year or add one above.`
                : "Create your first outlook item above."}
            </p>
          </div>
        ) : (
          <div className='space-y-6'>
            {sortedYears.map((year) => (
              <div key={year}>
                {filterYear === null && (
                  <h3 className='text-lg font-semibold text-gray-300 mb-3 flex items-center gap-2'>
                    <span className='bg-amber-600/20 text-amber-400 px-3 py-1 rounded-lg text-sm'>
                      {year}
                    </span>
                    <span className='text-sm text-gray-500 font-normal'>
                      {groupedOutlooks[year].length} items
                    </span>
                  </h3>
                )}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {groupedOutlooks[year].map((item) => (
                    <div
                      key={item.id}
                      className='bg-[#1a1a1a] p-5 rounded-xl border border-gray-800 hover:border-gray-700 transition-all'>
                      <div className='flex items-start justify-between mb-3'>
                        <div className='flex-1 min-w-0'>
                          <h4 className='font-semibold text-white truncate'>
                            {item.title}
                          </h4>
                          <span className='text-xs text-gray-500'>
                            Year: {item.year}
                          </span>
                        </div>
                      </div>
                      {item.path && (
                        <Link
                          href={item.path}
                          target='_blank'
                          className='inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors mb-4 truncate max-w-full'>
                          <ExternalLink className='w-3.5 h-3.5 flex-shrink-0' />
                          <span className='truncate'>{item.path}</span>
                        </Link>
                      )}
                      <div className='flex gap-2 pt-3 border-t border-gray-800'>
                        <button
                          onClick={() => handleEdit(item)}
                          disabled={isSubmitting}
                          className='flex-1 flex items-center justify-center gap-1.5 bg-blue-600/15 hover:bg-blue-600/25 text-blue-400 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50'>
                          <Pencil className='w-3.5 h-3.5' />
                          Edit
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(item.id)}
                          disabled={isSubmitting}
                          className='flex-1 flex items-center justify-center gap-1.5 bg-red-600/15 hover:bg-red-600/25 text-red-400 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50'>
                          <Trash2 className='w-3.5 h-3.5' />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
          <div className='bg-[#222] rounded-xl p-6 max-w-md w-full border border-gray-800 shadow-2xl'>
            <h3 className='text-xl font-bold mb-3'>Confirm Delete</h3>
            <p className='text-gray-400 mb-6'>
              Are you sure you want to delete this outlook item? This action
              cannot be undone.
            </p>
            <div className='flex gap-3'>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                disabled={isSubmitting}
                className='flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2'>
                {isSubmitting && (
                  <Loader2 className='w-4 h-4 animate-spin' />
                )}
                Delete
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                disabled={isSubmitting}
                className='flex-1 border border-gray-600 hover:bg-gray-800 text-white py-2.5 rounded-lg font-medium transition-colors'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
