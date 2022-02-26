import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config();

export const config = {
  server: {
    name: 'groupTask-crud',
    port: env.get('APPLICATION_PORT').default(3000).asPortNumber(),
  },
  db: {
    connectionString: env.get('DB_CONNECTION_URL')
      .default('mongodb://localhost:27017')
      .asString(),
    dbName: env.get('groupTask_DB_NAME')
      .default('groupTask')
      .asString(),
  },
};
