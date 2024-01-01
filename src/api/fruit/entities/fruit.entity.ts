import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Fruit {
  @Prop({ required: true, lowercase: true, trim: true })
  name: string;
  @Prop({ required: true, lowercase: true, trim: true })
  family: string;
  @Prop({ required: false, lowercase: true, trim: true })
  variety?: string;
  @Prop({ required: true, lowercase: true, trim: true })
  scientificName: string;
  @Prop({ required: true, lowercase: true, trim: true })
  description: string;
}

export const FruitSchema = SchemaFactory.createForClass(Fruit);
