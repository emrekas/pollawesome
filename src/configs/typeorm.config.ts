import { TypeOrmModuleOptions } from '@nestjs/typeorm';

console.log(process.env.DATABASE_URL);
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
