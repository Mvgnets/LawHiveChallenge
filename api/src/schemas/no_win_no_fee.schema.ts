import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoWinNoFeeDocument = NoWinNoFee & Document;

@Schema()
export class NoWinNoFee {
    @Prop()
    structureType: "No Win No Fee";
    @Prop()
    feePercentage: number;
}

export const NoWinNoFeeSchema = SchemaFactory.createForClass(NoWinNoFee);