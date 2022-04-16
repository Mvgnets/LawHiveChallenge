import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobPostingDocument = JobPosting & Document;

@Schema()
export class JobPosting {
    @Prop()
    title: string;

    @Prop()
    description: string;

}

export const JobPostingSchema = SchemaFactory.createForClass(JobPosting);