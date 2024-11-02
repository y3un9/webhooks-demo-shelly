import { useEffect, useState } from 'react'
import './index.css'

export default function WebhookForm({
  webhook={},
  onSubmit,
}) {
  const [name, setName] = useState('')
  const [enabled, setEnabled] = useState(false)
  const [urls, setUrls] = useState('')
  useEffect(() => {
    if (webhook) {
      setName(webhook.name || '')
      setEnabled(webhook.enabled || false)
      setUrls(webhook.urls ? webhook.urls.join(', ') : '')
    } else {
      setName('')
      setEnabled(false)
      setUrls('')
    }
  }, [webhook])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      name,
      enabled,
      urls: urls.split(',').map((url) => url.trim())
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} /> Enabled
      <textarea placeholder="URLs (comma-separated)" value={urls} onChange={(e) => setUrls(e.target.value)} required />
      <button type="submit">Save</button>
    </form>
  )
}