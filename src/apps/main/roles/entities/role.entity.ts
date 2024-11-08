import { AbstractEntity } from 'src/resources/base/abstract-entity-base';
import { Column, Entity } from 'typeorm';

@Entity()
export class Role extends AbstractEntity<Role> {
  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;
}
