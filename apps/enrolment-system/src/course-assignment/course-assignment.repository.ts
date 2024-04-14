import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseAssignmentDocument } from './entities/course-assignment.schema';

@Injectable()
export class CourseAssignmentRepository extends AbstractRepository<CourseAssignmentDocument> {
  protected readonly logger = new Logger(CourseAssignmentRepository.name);

  constructor(
    @InjectModel(CourseAssignmentDocument.name)
    courseAssignmentModel: Model<CourseAssignmentDocument>,
  ) {
    super(courseAssignmentModel);
  }
}
