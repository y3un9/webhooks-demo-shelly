import { useState } from 'react';

export default function WebhookTrigger({
  onTrigger
}) {
    const [data, setData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const parsedData = JSON.parse(data);
            onTrigger(parsedData)
        } catch (error) {
            alert('Invalid JSON')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Trigger data (JSON)"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
            />
            <button type="submit">Trigger Webhook</button>
        </form>
    )
}
