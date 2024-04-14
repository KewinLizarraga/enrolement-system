import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class StudentDocument extends AbstractDocument {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;
}

export const StudentSchema = SchemaFactory.createForClass(StudentDocument);
