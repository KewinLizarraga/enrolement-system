import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common/database/database.module';
import { CourseAssignmentService } from './course-assignment.service';
import { CourseAssignmentController } from './course-assignment.controller';
import { CourseAssignmentRepository } from './course-assignment.repository';
import {
  CourseAssignmentDocument,
  CourseAssignmentSchema,
} from './entities/course-assignment.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: CourseAssignmentDocument.name, schema: CourseAssignmentSchema },
    ]),
  ],
  controllers: [CourseAssignmentController],
  providers: [CourseAssignmentService, CourseAssignmentRepository],
})
export class CourseAssignmentModule {}
