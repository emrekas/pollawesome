import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url:
    process.env.DATABASE_URL ||
    'postgres://kiqellacdxmhgy:c870ed5365573a7ff1658cb3cb6cba3a1c83660ab0ddd6915518cfdc57da259d@ec2-176-34-211-0.eu-west-1.compute.amazonaws.com:5432/d82sagksvj35hm',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
