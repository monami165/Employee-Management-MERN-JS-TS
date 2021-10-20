import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EmployeeEntity } from '../entity/employee.entity';

@Injectable()
export class EmployeeService extends TypeOrmCrudService<EmployeeEntity> {
  constructor(@InjectRepository(EmployeeEntity) repo) {
    super(repo);
  }
}
