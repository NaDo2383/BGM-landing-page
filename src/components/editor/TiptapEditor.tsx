"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { useEffect } from "react"

interface Props {
  content: string
  onChange: (html: string) => void
}

export default function TiptapEditorFull({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Write your news content..." }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "min-h-[250px] text-white px-4 py-3 focus:outline-none prose prose-invert max-w-none",
        style: "background-color: #1a1a1a;",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
    immediatelyRender: false,
  })

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  if (!editor) return null

  return (
    <div className='w-full bg-[#1a1a1a]'>
      <div className='flex flex-wrap items-center gap-2 px-2 py-2 border-b border-gray-700 bg-[#222] text-white text-sm'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "font-bold text-blue-400" : ""}>
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "italic text-blue-400" : ""}>
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "underline text-blue-400" : ""}>
          Underline
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  )
}
