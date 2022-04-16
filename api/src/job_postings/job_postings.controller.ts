import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobPostingsService } from './job_postings.service';
import { CreateJobPostingDto } from './dto/create-job_posting.dto';
import { UpdateJobPostingDto } from './dto/update-job_posting.dto';

@Controller('job-postings')
export class JobPostingsController {
  constructor(private readonly jobPostingsService: JobPostingsService) { }

  @Post()
  create(@Body() createJobPostingDto: CreateJobPostingDto) {
    return this.jobPostingsService.create(createJobPostingDto);
  }

  @Get()
  findAll() {
    return this.jobPostingsService.findAll();
  }

  @Get(':title')
  findOne(@Param('title') title: string) {
    return this.jobPostingsService.findOne(title);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobPostingDto: UpdateJobPostingDto) {
    return this.jobPostingsService.update(+id, updateJobPostingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobPostingsService.remove(+id);
  }
}
