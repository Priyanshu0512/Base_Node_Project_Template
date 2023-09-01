const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} : ${level} : ${message}`;
  });

const logger = createLogger({
    format: combine(
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        customFormat
    ),
    transports: [// This function takes all the logs and prints them to the console and to a file for future reference.
        new transports.Console(),
        new transports.File({filename: 'combine.log'})
    ]
})

module.exports = logger;