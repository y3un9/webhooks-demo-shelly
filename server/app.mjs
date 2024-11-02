import env from './env.json' assert { type: 'json' }
import express from 'express'
import cors from 'cors'

import webhookRoutes from './routes/webhookRoutes.mjs'

function main() {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use('/api', webhookRoutes)

  const port = env.port || 8000
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  })
}
main()
