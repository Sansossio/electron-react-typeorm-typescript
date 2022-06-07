import { Entity, Column } from '../typeorm'
import { BaseEntity } from './base.entity'

@Entity('todo_list')
export class TodoListEntity extends BaseEntity {
  @Column()
    description: string
}
