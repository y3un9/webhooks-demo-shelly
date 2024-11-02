import axios from 'axios'

const API_URL = 'http://localhost:8000/api'

export function getWebhooks() {
  const res = axios.get(API_URL + `/webhooks`)
  console.log('getWebhooks', res)
  return res
}

export function getWebhookById(id) {
  const res = axios.get(API_URL + `/webhooks/${id}`)
  console.log('getWebhookById', res)
  return res
}

/**
 * 
 * @param {Webhook} data 
 * @returns 
 */
export function createWebhook(data) {
  const res = axios.post(API_URL + `/webhooks`, data)
  console.log('createWebhook', res)
  return res
}

/**
 * 
 * @param {*} id 
 * @param {Webhook} data 
 */
export function updateWebhookById(id, data) {
  const res = axios.put(API_URL + `/webhooks/${id}`, data)
  console.log('updateWebhookById', res)
  return res
}

export function deleteWebhookById(id) {
  const res = axios.delete(API_URL + `/webhooks/${id}`)
  console.log('deleteWebhookById', res)
  return res
}

/**
 * 
 * @param {*} id 
 * @param {*} data 
 * @returns 
 */
export function triggerWebhookById(id, data) {
  const res = axios.post(API_URL + `/webhooks/${id}/trigger`, data)
  console.log('triggerWebhookById', res)
  return res
}