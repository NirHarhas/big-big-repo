export type Nullable<T> = T | null;

export interface Dictionary<T> {
  [Key: string]: T;
}

export enum ServerEnvironmentType {
  Local = "local-development",
  OnPrem = "on-prem",
  Development = "development",
  Beta = "beta",
  Staging = "staging",
  Production = "production",
  Testing = "testing",
}

export enum ErrorType {
  TBD = "Missing TBD",
}
