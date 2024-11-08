import { AbstractEntity } from 'src/resources/base/abstract-entity-base';
import { Column, Entity } from 'typeorm';

@Entity()
// @Unique(['UniqueTitleName', 'name'])
export class Title extends AbstractEntity<Title> {
  @Column({ unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}
