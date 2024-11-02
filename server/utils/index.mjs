export function replaceTokens(url, data) {
  return url.replace(/\{\{(\w+)\}\}/g, (match, token) => data[token] || match)
}