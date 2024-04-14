import { Injectable } from '@nestjs/common';
import { CreateCourseAssignmentDto } from './dto/create-course-assignment.dto';
import { UpdateCourseAssignmentDto } from './dto/update-course-assignment.dto';
import { CourseAssignmentRepository } from './course-assignment.repository';

@Injectable()
export class CourseAssignmentService {
  constructor(
    private readonly courseAssignmentRepository: CourseAssignmentRepository,
  ) {}

  async create(createCourseAssignmentDto: CreateCourseAssignmentDto) {
    return await this.courseAssignmentRepository.create({
      ...createCourseAssignmentDto,
      assignmentDate: new Date(),
    });
  }

  async findAll() {
    return await this.courseAssignmentRepository.find({}, [
      { path: 'idStudent', model: 'StudentDocument' },
      { path: 'idCourse', model: 'CourseDocument' },
    ]);
  }

  async findOne(_id: string) {
    return await this.courseAssignmentRepository.findOne({ _id }, [
      { path: 'idStudent', model: 'StudentDocument' },
      { path: 'idCourse', model: 'CourseDocument' },
    ]);
  }

  async update(
    _id: string,
    updateCourseAssignmentDto: UpdateCourseAssignmentDto,
  ) {
    return await this.courseAssignmentRepository.findOneAndUpdate(
      { _id },
      { $set: updateCourseAssignmentDto },
      [
        { path: 'idStudent', model: 'StudentDocument' },
        { path: 'idCourse', model: 'CourseDocument' },
      ],
    );
  }

  async remove(_id: string) {
    return await this.courseAssignmentRepository.findOneAndDelete({ _id }, [
      { path: 'idStudent', model: 'StudentDocument' },
      { path: 'idCourse', model: 'CourseDocument' },
    ]);
  }
}
