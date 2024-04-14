import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common/database/database.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { CourseAssignmentModule } from './course-assignment/course-assignment.module';

@Module({
  imports: [
    DatabaseModule,
    StudentModule,
    CourseModule,
    CourseAssignmentModule,
  ],
  exports: [DatabaseModule],
})
export class AppModule {}
