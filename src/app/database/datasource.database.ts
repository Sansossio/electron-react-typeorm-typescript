import { DataSourceOptions } from 'typeorm'
import entities from './entity'

export const dataSource: DataSourceOptions = {
  type: 'sqlite',
  database: './db.sqlite',
  entities,
  synchronize: true
}
