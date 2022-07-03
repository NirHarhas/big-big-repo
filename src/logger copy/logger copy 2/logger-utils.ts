import { ServerEnvironmentType } from "../../common/common-types";
import { getEnvironmentType } from "../../common/env-utils";

const dir = process.cwd() + "/logger";
const getLogFile = () =>
  typeof process.env.LOGGER_FILE_NAME !== "undefined"
    ? process.env.LOGGER_FILE_NAME
    : dir + "/logger.log";

const getLogLevel = () =>
  typeof process.env.LOGGER_LEVEL !== "undefined"
    ? process.env.LOGGER_LEVEL
    : "info";

const isLocalFileLogging = (): boolean => {
  return [ServerEnvironmentType.Local].includes(getEnvironmentType());
};

const isJsonLogging = (): boolean => {
  return [
    ServerEnvironmentType.Development,
    ServerEnvironmentType.Staging,
    ServerEnvironmentType.Beta,
    ServerEnvironmentType.Production,
    ServerEnvironmentType.Testing,
  ].includes(getEnvironmentType());
};

export { isJsonLogging, isLocalFileLogging, getLogFile, getLogLevel };
