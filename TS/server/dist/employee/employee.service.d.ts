import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EmployeeEntity } from '../entity/employee.entity';
export declare class EmployeeService extends TypeOrmCrudService<EmployeeEntity> {
    constructor(repo: any);
}
