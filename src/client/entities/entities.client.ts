import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clients {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'text' })
  gmail: string;

  @Column({ type: 'numeric' })
  numberPhone: number;

  @Column({ type: 'text' })
  direction: string;
}
