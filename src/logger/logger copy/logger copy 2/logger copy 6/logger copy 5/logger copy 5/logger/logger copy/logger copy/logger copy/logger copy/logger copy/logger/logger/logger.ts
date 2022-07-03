import winston from "winston";
import {
  getLogFile,
  getLogLevel,
  isJsonLogging,
  isLocalFileLogging,
} from "./logger-utils";

export const logger = winston.createLogger({
  level: getLogLevel(),
  format: winston.format.json(),
});

if (isJsonLogging()) {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.printf(
          (info) =>
            `${JSON.stringify({
              timestamp: info.timestamp,
              level: info.level,
              message: info.message,
            })}`
        )
      ),
    })
  );
} else {
  // local dev and on prem environment (colorize and none json printing)
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  );
}

if (isLocalFileLogging()) {
  logger.add(
    new winston.transports.File({
      maxsize: 1024 * 1024 * 20,
      filename: getLogFile(),
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    })
  );
}
