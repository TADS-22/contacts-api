import 'express-async-errors'
import express from 'express'
import { contactsRouter } from './router'
import { errorHandler } from './middlewares'

const app = express()

app.use(express.json())
app.use('/api/contacts', contactsRouter)
app.use(errorHandler)

app.listen(3000, () => console.log('Server is up!'))
