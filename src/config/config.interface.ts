export interface ConfigurationInterface {
  database: {
    connection: string;
    username: string;
    password: string;
    authSource: string;
  };
  jwt: {
    secretKey: string;
    expires: string;
  };
  opsKey: string;
  node_env: 'production' | 'development';
  origin: RegExp;
}
