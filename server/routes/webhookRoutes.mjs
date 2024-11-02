import express from 'express'
import webhookController from '../controllers/webhookController.mjs'

const router = express.Router()
router.get('/webhooks', webhookController.listWebhooks)
router.get('/webhooks/:id', webhookController.getWebhook)
router.post('/webhooks', webhookController.createWebhook)
router.put('/webhooks/:id', webhookController.updateWebhook)
router.delete('/webhooks/:id', webhookController.deleteWebhook)
router.post('/webhooks/:id/trigger', webhookController.triggerWebhook)

export default router