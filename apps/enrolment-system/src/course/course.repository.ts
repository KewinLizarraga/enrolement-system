import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseDocument } from './models/course.schema';

@Injectable()
export class CourseRepository extends AbstractRepository<CourseDocument> {
  protected readonly logger = new Logger(CourseRepository.name);

  constructor(
    @InjectModel(CourseDocument.name)
    courseModel: Model<CourseDocument>,
  ) {
    super(courseModel);
  }
}
