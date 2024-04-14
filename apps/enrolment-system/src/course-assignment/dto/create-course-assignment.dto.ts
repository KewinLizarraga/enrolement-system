import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateCourseAssignmentDto {
  @IsString()
  @IsNotEmpty()
  idStudent: string;

  @IsString()
  @IsNotEmpty()
  idCourse: string;
}
