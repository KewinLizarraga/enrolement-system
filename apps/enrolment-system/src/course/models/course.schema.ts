import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class CourseDocument extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  level: string;
}

export const CourseSchema = SchemaFactory.createForClass(CourseDocument);
