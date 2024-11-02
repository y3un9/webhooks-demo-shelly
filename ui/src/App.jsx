import { useEffect, useState } from 'react'
import { Spin, message } from 'antd'
import {
  getWebhooks,
  getWebhookById,
  createWebhook,
  updateWebhookById,
  deleteWebhookById,
  triggerWebhookById,
} from './api/api'
import './App.css'
import WebhookList from './components/WebhookList'
import WebhookForm from './components/WebhookForm'
import WebhookTrigger from './components/WebhookTrigger'

function App() {
  const [webhooks, setWebhooks] = useState([])
  const [editingWebhook, setEditingWebhook] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    hydrateWebhooks()
  }, [])

  const hydrateWebhooks = async () => {
    setLoading(true)
    try {
      const res = await getWebhooks()
      setWebhooks(res.data.data.list)
    } finally {
      setLoading(false)
    }
  }

  const handleListItemEdit = async (webhook) => {
    console.log('handleListItemEdit', webhook)
    setEditingWebhook(webhook)
  }

  const handleListItemDelete = async (id) => {
    console.log('handleListItemDelete', id)
    message.loading('Deleting webhook', 0)
    try {
      await deleteWebhookById(id)
      message.destroy()
      message.success(`Webhook deleted`)
      hydrateWebhooks()
    } catch(err) {
      message.error(`Delete webhook failed`)
    }
  }

  const handleListItemTrigger = async (id) => {
    console.log('handleListItemTrigger', id)
    await triggerWebhookById(id, {})
    message.success(`Webhook triggered`)
  }

  const handleCreateOrUpdate = async (webhookData) => {
    console.log('handleCreateOrUpdate', webhookData)
    console.log('editingWebhook', editingWebhook)
    if (editingWebhook) {
      try {
        await updateWebhookById(editingWebhook.id, webhookData)
        message.success(`Webhook updated`)
      } catch(err) {
        message.error(`Update webhook failed`)
      }
    } else {
      try {
        await createWebhook(webhookData)
        message.success(`Webhook created`)
      } catch(err) {
        message.error(`Create webhook failed`)
      }
    }
    setEditingWebhook(null)
    hydrateWebhooks()
  }

  return (
    <div>
      <h1>Webhooks Service Demo for Shelly by Ka-Ho Yeung (A.K.A. Kah)</h1>
      <Spin spinning={loading}>
        <WebhookForm
          webhook={editingWebhook}
          onSubmit={handleCreateOrUpdate}
        />
        <WebhookList
          webhooks={webhooks}
          onItemEdit={handleListItemEdit}
          onItemDelete={handleListItemDelete}
          onItemTrigger={handleListItemTrigger}
        />
        <WebhookTrigger
          onTrigger={(data) => handleListItemTrigger(editingWebhook?.id, data)}
        />
      </Spin>
    </div>
  )
}

export default App
