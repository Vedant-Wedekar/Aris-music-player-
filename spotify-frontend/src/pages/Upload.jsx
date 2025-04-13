import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Upload() {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [file, setFile] = useState(null)

  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('artist', artist)
    formData.append('song', file)

    try {
      await axios.post('http://localhost:5000/songs/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      alert('Upload successful!')
      setTitle('')
      setArtist('')
      setFile(null)
    } catch (err) {
      alert('Upload failed')
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <form onSubmit={handleUpload} className="bg-white dark:bg-gray-700 p-6 rounded shadow-md w-96 space-y-4">
        <input type="text" placeholder="Title" className="p-2 w-full border rounded" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Artist" className="p-2 w-full border rounded" value={artist} onChange={e => setArtist(e.target.value)} />
        <input type="file" className="p-2 w-full border rounded" onChange={e => setFile(e.target.files[0])} />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Upload Song</button>
      </form>
    </div>
  )
}

export default Upload
