# Webhook Service

## Preparation

my dev env is node.js@20

```sh
# install dependencies for server and launch
cd ./server/
npm install # or `pnpm install`
npm run start # or `node app.mjs`
# default port is :8000

# install dependencies for ui and launch
cd ./ui/
npm install # or `pnpm install`
npm run dev
# I use vite as bundler
```

## API Endpoints

- `GET /api/webhooks`: List all webhooks
- `GET /api/webhooks/:id`: Get a webhook by ID
- `POST /api/webhooks`: Create a new webhook
- `PUT /api/webhooks/:id`: Update a webhook by ID
- `DELETE /api/webhooks/:id`: Delete a webhook by ID
- `POST /api/webhooks/:id/trigger`: Trigger a webhook, replacing tokens in the urls with http body data

## Example data for Trigger

```json
POST /api/webhooks/1/trigger
{
  "event": "user.created",
  "id": "123",
  "name": "kah"
}