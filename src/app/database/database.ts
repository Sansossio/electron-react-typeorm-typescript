import { DataSource, EntityTarget, Repository } from 'typeorm'
import { dataSource } from './datasource.database'
import { TypeOrm } from './typeorm'

export class DatabaseBase {
  private dataSource = new TypeOrm.DataSource(dataSource)

  async initialize () {
    if (this.dataSource && this.dataSource.isInitialized) {
      return
    }

    await this.dataSource.initialize()
  }

  getDataSource (): DataSource {
    return this.dataSource
  }

  getRepository<T> (entity: EntityTarget<T>): Repository<T> {
    return this.dataSource.getRepository(entity)
  }
}

export const DatabaseInstance = new DatabaseBase()
