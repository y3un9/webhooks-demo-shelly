class WebhookModel {
  /** @type {Webhook[]} */
  webhooks = []
  // webhooks = Array.from({ length: 10 }).map((_, index) => ({
  //   id: index.toString(),
  //   name: index.toString(),
  //   enabled: false,
  //   urls: []
  // }))
  findAll = () => {
    return this.webhooks
  }
  findOne = (id) => {
    return this.webhooks.find(({ id: _id }) => _id === id)
  }
  insertOne = (webhook) => {
    this.webhooks.push(webhook)
    return webhook
  }
  updateOne = (id, data) => {
    const index = this.webhooks.findIndex(({ id: _id }) => _id === id)
    if (-1 === index) {
      return null
    }
    this.webhooks[index] = {
      ...this.webhooks[index],
      ...data,
    }
    return this.webhooks[index]
  }
  deleteOne = (id) => {
    this.webhooks = this.webhooks.filter(({ id: _id }) => _id !== id)
  }
}

export default new WebhookModel()