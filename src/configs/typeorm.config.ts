import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url:
    process.env.DATABASE_URL ||
    'postgres://dwcrryejufwbjh:f4e173ee04b117eca7ba0568760b5ada517b7960bf56e31c2624549d4132107d@ec2-54-247-118-139.eu-west-1.compute.amazonaws.com:5432/d7q18jkuuhqjst',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  extra: {
    ssl: process.env.SSL || false,
  },
};
