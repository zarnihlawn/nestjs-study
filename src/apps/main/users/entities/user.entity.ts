import { AbstractEntity } from 'src/resources/base/abstract-entity-base';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Title } from '../../titles/entities/title.entity';

@Entity()
export class User extends AbstractEntity<User> {
  @Column({nullable: true})
  name: string;

  @Column({ nullable: true })
  @ManyToOne(() => Title, (title) => title.name)
  title: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({nullable: true})
  dateOfBirth: Date;
}