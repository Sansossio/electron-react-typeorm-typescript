import TypeormType from 'typeorm'

const MainProcessTypeOrm = window.require('typeorm')

// Export global typeorm library
export const TypeOrm: typeof TypeormType = MainProcessTypeOrm

// Repository
export type Repository<T> = TypeormType.Repository<T>;
export type EntityTarget<T> = TypeormType.EntityTarget<T>;

// Export entities from typeorm
export const Column = TypeOrm.Column
export const CreateDateColumn = TypeOrm.CreateDateColumn
export const Entity = TypeOrm.Entity
export const PrimaryGeneratedColumn = TypeOrm.PrimaryGeneratedColumn
export const UpdateDateColumn = TypeOrm.UpdateDateColumn
export const ManyToOne = TypeOrm.ManyToOne
export const OneToMany = TypeOrm.OneToMany

// Hooks
export const BeforeInsert = TypeOrm.BeforeInsert
export const BeforeUpdate = TypeOrm.BeforeUpdate
export const AfterLoad = TypeOrm.AfterLoad
