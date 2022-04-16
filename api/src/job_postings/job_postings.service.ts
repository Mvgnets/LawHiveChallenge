import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobPosting, JobPostingDocument } from 'src/schemas/job_posting.schema';
import { CreateJobPostingDto } from './dto/create-job_posting.dto';
import { UpdateJobPostingDto } from './dto/update-job_posting.dto';

@Injectable()
export class JobPostingsService {
  constructor(@InjectModel(JobPosting.name) private jobPostingModel: Model<JobPostingDocument>) { }

  async create(createJobPostingDto: CreateJobPostingDto): Promise<JobPosting> {
    return new this.jobPostingModel(createJobPostingDto).save();
  }

  async findAll() {
    return this.jobPostingModel.find();
  }

  findOne(title: string) {
    return this.jobPostingModel.findOne({ title });
  }

  update(id: number, updateJobPostingDto: UpdateJobPostingDto) {
    return `This action updates a #${id} jobPosting`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobPosting`;
  }
}
