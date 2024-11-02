# Webhook Service

This service allows CRUD operations for webhooks and triggering webhooks with dynamic token replacement in URLs.

## API Endpoints

- `POST /api/webhooks`: Create a new webhook.
- `GET /api/webhooks`: List all webhooks.
- `GET /api/webhooks/:id`: Get a webhook by ID.
- `PUT /api/webhooks/:id`: Update a webhook by ID.
- `DELETE /api/webhooks/:id`: Delete a webhook by ID.
- `POST /api/webhooks/:id/trigger`: Trigger a webhook, replacing tokens in the URLs with provided data.

## Sample Request for Trigger

```json
POST /api/webhooks/1/trigger
{
  "username": "john_doe",
  "event": "signup"
}