import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from '../typeorm'

export class BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number

  @UpdateDateColumn()
  readonly updatedAt: Date

  @CreateDateColumn()
  readonly createdAt: Date
}
