import { Logger } from '@nestjs/common';
import { MongoMemoryReplSet } from 'mongodb-memory-server';
import * as mongoose from 'mongoose';

export const replSet = new MongoMemoryReplSet({
  replSet: { storageEngine: 'wiredTiger' },
});

export const mockDatabaseFactory = async (): Promise<typeof mongoose> => {
  await replSet.waitUntilRunning();
  const uri = await replSet.getUri();
  const onJest = process.env.JEST_WORKER_ID !== undefined;
  Logger.log(`Running on Jest: ${onJest}`);
  Logger.log(`Mock replica URI: ${uri}`);
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
