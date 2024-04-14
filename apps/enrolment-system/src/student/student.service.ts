import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async create(createStudentDto: CreateStudentDto) {
    return await this.studentRepository.create(createStudentDto);
  }

  async findAll() {
    return await this.studentRepository.find({}, []);
  }

  async findOne(_id: string) {
    return await this.studentRepository.findOne({ _id }, []);
  }

  async update(_id: string, updateStudentDto: UpdateStudentDto) {
    return await this.studentRepository.findOneAndUpdate(
      { _id },
      { $set: updateStudentDto },
      [],
    );
  }

  async remove(_id: string) {
    return await this.studentRepository.findOneAndDelete({ _id }, []);
  }
}
