import { type EngineType } from "./engine-type.js";

// @todo: rename to DatabaseOptions
export type ConnectionOptions = {
  columnName: string;
  connectionString?: string;
  databaseName: string;
  engine?: EngineType;
  filePath?: string;
  password?: string;
  serverName?: string;
  tableName: string;
  userName?: string;
};
