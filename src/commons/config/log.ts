import winston, { LoggerOptions } from 'winston'

const logConfig: LoggerOptions = {
    level: 'debug',
    format: winston.format.combine(
        winston.format.errors(),
        winston.format.timestamp(),
        winston.format.logstash(),
    ),
    transports: [
        new winston.transports.Console()
    ]
}

export default logConfig
