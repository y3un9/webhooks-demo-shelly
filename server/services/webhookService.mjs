import axios from 'axios'
import { replaceTokens } from '../utils/index.mjs'

class WebhookService {
  /**
   * 
   * @param {Webhook} webhook 
   * @param {*} data 
   */
  triggerWebhook = async (webhook, data) => {
    const requests = webhook.urls.map((url) => {
      const processedUrl = replaceTokens(url, data)
      return axios.post(processedUrl, data)
        .catch((err) => {
          console.log(`url ${processedUrl} fetch err`, err.message)
        })
    })
    await Promise.allSettled(requests)
  }
}

export default new WebhookService()
