import { DataSourceOptions } from 'typeorm'

export const dataSource: DataSourceOptions = {
  type: 'sqlite',
  database: './db.sqlite',
  synchronize: true
}
