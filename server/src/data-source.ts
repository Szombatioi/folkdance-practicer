import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_db_user',
  password: 'your_password',
  database: 'your_db_name',
  synchronize: false, // be careful! true will auto-sync & can DROP data
  logging: true,
  entities: [],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});