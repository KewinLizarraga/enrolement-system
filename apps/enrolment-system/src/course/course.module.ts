import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common/database/database.module';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseRepository } from './course.repository';
import { CourseDocument, CourseSchema } from './models/course.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: CourseDocument.name, schema: CourseSchema },
    ]),
  ],
  controllers: [CourseController],
  providers: [CourseService, CourseRepository],
})
export class CourseModule {}
