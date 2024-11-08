import { AbstractEntity } from 'src/resources/base/abstract-entity-base';
import { YesNoEnum } from 'src/resources/enum/yes-no.enum';
import { Column, Entity } from 'typeorm';

@Entity()
export class Ward extends AbstractEntity<Ward> {
  @Column({ unique: true })
  name: string;

  @Column()
  location: string;

  @Column({ default: YesNoEnum.Yes })
  active: YesNoEnum;
}
