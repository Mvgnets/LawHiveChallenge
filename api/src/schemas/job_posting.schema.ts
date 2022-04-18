import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FixedFee } from './fixed_fee.schema';
import { NoWinNoFee } from './no_win_no_fee.schema';

export type JobPostingDocument = JobPosting & Document;

@Schema()
export class JobPosting {
    @Prop()
    feePercentage: string;

    @Prop()
    description: string;

    @Prop()
    state: string;

    @Prop({ type: Object })
    feeStructure: NoWinNoFee | FixedFee;

}

export const JobPostingSchema = SchemaFactory.createForClass(JobPosting);