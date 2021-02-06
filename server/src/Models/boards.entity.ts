import {
  Entity, Column, PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({type: 'text'})
  body: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'createdAt', type: 'datetime' })
  createdAt: Date
}