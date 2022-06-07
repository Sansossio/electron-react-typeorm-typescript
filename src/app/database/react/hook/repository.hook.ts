import { useContext } from 'react'
import { EntityTarget, Repository } from '../../typeorm'
import { DatabaseContext } from '../context/database.context'

export function useRepository<T> (entity: EntityTarget<T>): Repository<T> {
  return useContext(DatabaseContext).getRepository(entity)
}
