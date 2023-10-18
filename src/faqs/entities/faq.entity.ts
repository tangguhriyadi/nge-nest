import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Faqs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  question: string;

  @Column({ type: 'text' })
  answer: string;

  @Column({ type: 'int', default: 0, nullable: true })
  order: number | null;

  @Column({ type: 'boolean', default: false, nullable: true })
  deleted: boolean | null;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'int', nullable: true, name: 'created_by' })
  createdBy: number | null;

  @Column({ type: 'int', nullable: true, name: 'updated_by' })
  updatedBy: number | null;

  @Column({ type: 'int', nullable: true, name: 'deleted_by' })
  deletedBy: number | null;

  @Column({ type: 'timestamptz', nullable: true, name: 'deleted_at' })
  deletedAt: Date | null;

  constructor(faqs: Partial<Faqs>) {
    Object.assign(this, faqs);
  }
}
