import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Injectable } from '@nestjs/common';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  count(options?: FindManyOptions<Role>) {
    return this.roleRepository.count(options);
  }

  create(createRoleDto: CreateRoleDto) {
    const item = this.roleRepository.create(createRoleDto);
    return this.roleRepository.save(item);
  }

  findAll(options?: FindManyOptions<Role>) {
    return this.roleRepository.find(options);
  }

  findOne(options?: FindOneOptions<Role>) {
    return this.roleRepository.findOne(options);
  }

  async update(options: FindOneOptions<Role>, updateRoleDto: UpdateRoleDto) {
    const item = await this.findOne(options);
    return this.roleRepository.save({ ...item, ...updateRoleDto });
  }

  async remove(options: FindOneOptions<Role>) {
    const item = await this.findOne(options);
    const id = item.id;

    await this.roleRepository.remove(item);

    item.id = id;
    return id;
  }
}
