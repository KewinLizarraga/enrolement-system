import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class CourseAssignmentDocument extends AbstractDocument {
  @Prop()
  idStudent: string;

  @Prop()
  idCourse: string;

  @Prop()
  assignmentDate: Date;
}

export const CourseAssignmentSchema = SchemaFactory.createForClass(
  CourseAssignmentDocument,
);
