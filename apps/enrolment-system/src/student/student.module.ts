import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentRepository } from './student.repository';
import { DatabaseModule } from '@app/common/database/database.module';
import { StudentDocument, StudentSchema } from './entities/student.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: StudentDocument.name, schema: StudentSchema },
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {}
