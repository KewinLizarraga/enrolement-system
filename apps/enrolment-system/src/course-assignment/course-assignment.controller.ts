import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseAssignmentService } from './course-assignment.service';
import { CreateCourseAssignmentDto } from './dto/create-course-assignment.dto';
import { UpdateCourseAssignmentDto } from './dto/update-course-assignment.dto';

@Controller('course-assignment')
export class CourseAssignmentController {
  constructor(
    private readonly courseAssignmentService: CourseAssignmentService,
  ) {}

  @Post()
  async create(@Body() createCourseAssignmentDto: CreateCourseAssignmentDto) {
    return await this.courseAssignmentService.create(createCourseAssignmentDto);
  }

  @Get()
  async findAll() {
    return await this.courseAssignmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.courseAssignmentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCourseAssignmentDto: UpdateCourseAssignmentDto,
  ) {
    return this.courseAssignmentService.update(id, updateCourseAssignmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.courseAssignmentService.remove(id);
  }
}
