import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FixedFeeDocument = FixedFee & Document;

@Schema()
export class FixedFee {
    @Prop()
    feeAmount: number;
}

export const FixedFeeSchema = SchemaFactory.createForClass(FixedFee);