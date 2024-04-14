import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseRepository } from './course.repository';

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async create(createCourseDto: CreateCourseDto) {
    return await this.courseRepository.create(createCourseDto);
  }

  async findAll() {
    return await this.courseRepository.find({}, []);
  }

  async findOne(_id: string) {
    return await this.courseRepository.findOne({ _id }, []);
  }

  async update(_id: string, updateCourseDto: UpdateCourseDto) {
    return await this.courseRepository.findOneAndUpdate(
      { _id },
      { $set: updateCourseDto },
      [],
    );
  }

  async remove(_id: string) {
    return await this.courseRepository.findOneAndDelete({ _id }, []);
  }
}
