import { List, Button, Popconfirm, Switch } from 'antd'
import './index.css'

export default function Webhooks({
  webhooks,
  onItemEdit,
  onItemDelete,
  onItemTrigger,
}) {
  return (
    <List
      bordered
      dataSource={webhooks}
      renderItem={(webhook) => (
        <List.Item
          actions={[
            <Button color="primary" variant="text" onClick={() => onItemTrigger(webhook.id)}>Trigger</Button>,
            <Button type="text" onClick={() => onItemEdit(webhook)}>Edit</Button>,
            <Popconfirm
              title="Delete the webhook"
              description="Please confirm your action"
              onConfirm={() => onItemDelete(webhook.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button color="danger" variant="text">Delete</Button>
            </Popconfirm>
          ]}
        >
          <List.Item.Meta
            title={webhook.name}
            description={webhook.urls.join(', ')}
          />
          <Switch checked={webhook.enabled} />
        </List.Item>
      )}
    />
  )
}