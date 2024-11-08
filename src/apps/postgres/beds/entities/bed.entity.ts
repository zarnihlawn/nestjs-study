import { Column, Entity, ManyToOne } from 'typeorm';
import { Ward } from '../../wards/entities/ward.entity';
import { YesNoEnum } from 'src/resources/enum/yes-no.enum';
import { AbstractEntity } from 'src/resources/base/abstract-entity-base';

@Entity()
export class Bed extends AbstractEntity<Bed> {
  @Column({ unique: true })
  name: string;

  @Column()
  @ManyToOne(() => Ward, (ward) => ward.id)
  ward: number;

  @Column({ default: YesNoEnum.Yes })
  active: YesNoEnum;
}
