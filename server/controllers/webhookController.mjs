import webhookModel from '../models/webhookModel.mjs'
import webhookService from '../services/webhookService.mjs'

class WebhookController {
  listWebhooks = (req, res) => {
    const webhooks = webhookModel.findAll()
    res.status(200)
    res.json({
      code: 200,
      data: {
        list: webhooks,
        length: webhooks.length,
      },
      msg: '',
    })
  }
  getWebhook = (req, res) => {
    const webhook = webhookModel.findOne(req.params.id)
    if (!webhook) {
      res.status(200)
      res.json({
        code: 404,
        msg: 'data not exist',
      })
      res.end()
      return
    }
    res.status(200)
    res.json({
      code: 200,
      data: webhook,
      msg: '',
    })
    res.end()
    return
  }
  createWebhook = (req, res) => {
    const now = new Date()
    const {
      name,
      enabled,
      urls,
    } = req.body
    const id = now.getTime().toString()
    const webhook = {
      id,
      name,
      enabled,
      urls,
    }
    webhookModel.insertOne(webhook)
    res.status(200)
    res.json({
      code: 200,
      data: webhook,
      msg: 'data created successfully',
    })
    res.end()
  }
  updateWebhook = (req, res) => {
    const updatedWebhook = webhookModel.updateOne(req.params.id, req.body)
    if (!updatedWebhook) {
      res.status(200)
      res.json({
        code: 404,
        msg: 'data not exist',
      })
      res.end()
      return
    }
    res.status(200)
    res.json({
      code: 200,
      data: updatedWebhook,
      msg: 'data updated successfully',
    })
  }
  deleteWebhook = (req, res) => {
    const webhook = webhookModel.findOne(req.params.id)
    if (!webhook) {
      res.status(200)
      res.json({
        code: 404,
        msg: 'data not exist',
      })
      res.end()
      return
    }
    webhookModel.deleteOne(req.params.id)
    res.status(200)
    res.json({
      code: 200,
      msg: 'data deleted successfully'
    })
  }
  triggerWebhook = async (req, res) => {
    const webhook = webhookModel.findOne(req.params.id)
    if (!webhook) {
      res.status(200)
      res.json({
        code: 404,
        msg: 'data not exist',
      })
      res.end()
      return
    }
    if (!webhook.enabled) {
      res.status(200)
      res.json({
        code: 500,
        msg: 'data is disabled',
      })
      res.end()
      return
    }
    await webhookService.triggerWebhook(webhook, req.body)
    res.status(200)
    res.json({
      code: 200,
      msg: 'data triggered'
    })
  }
}

export default new WebhookController()
