import { ServerEnvironmentType } from "./common-types";

const isDevelopment = (): boolean => {
  return getEnvironmentType() === ServerEnvironmentType.Local;
};

const isOnPrem = (): boolean => {
  return getEnvironmentType() === ServerEnvironmentType.OnPrem;
};

const getEnvironmentType = (): ServerEnvironmentType => {
  return process.env.SERVER_ENVIRONMENT as ServerEnvironmentType;
};

export { isDevelopment, isOnPrem, getEnvironmentType };
