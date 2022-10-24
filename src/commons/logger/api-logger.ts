import winston from 'winston'
import { logConfig } from '../config'
import { LogErrorData } from './interface'

const winstonLogger = winston.createLogger(logConfig)

const info = (message: string, meta?: any) => 
    winstonLogger.info(message, meta)

const error = (message: string, meta: LogErrorData) => 
    winstonLogger.error(message, meta)

export default {
    error,
    info,
}