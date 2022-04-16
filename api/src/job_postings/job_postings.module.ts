import { Module } from '@nestjs/common';
import { JobPostingsService } from './job_postings.service';
import { JobPostingsController } from './job_postings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JobPosting, JobPostingSchema } from 'src/schemas/job_posting.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: JobPosting.name, schema: JobPostingSchema }])],
  controllers: [JobPostingsController],
  providers: [JobPostingsService]
})
export class JobPostingsModule { }
