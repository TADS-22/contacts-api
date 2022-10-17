import express from 'express'
import { contactsRouter } from './router'

const app = express()

app.use(express.json())
app.use('/api/contacts', contactsRouter)

app.listen(3000, () => console.log('Server is up!'))
