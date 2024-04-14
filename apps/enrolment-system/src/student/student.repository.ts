import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDocument } from './entities/student.schema';

@Injectable()
export class StudentRepository extends AbstractRepository<StudentDocument> {
  protected readonly logger = new Logger(StudentRepository.name);

  constructor(
    @InjectModel(StudentDocument.name)
    studentModel: Model<StudentDocument>,
  ) {
    super(studentModel);
  }
}
