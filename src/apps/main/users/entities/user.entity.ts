import { AbstractEntity } from 'src/resources/base/abstract-entity-base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Title } from '../../titles/entities/title.entity';

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  name: string;

  @Column({ nullable: true })
  @ManyToOne(() => Title, (title) => title.name)
  title: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  dateOfBirth: Date;
}