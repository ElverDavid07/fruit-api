import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Fruit, FruitSchema } from './entities/fruit.entity';
import { FruitController } from './fruit.controller';
import { FruitService } from './fruit.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fruit.name, schema: FruitSchema }]),
  ],
  controllers: [FruitController],
  providers: [FruitService],
})
export class FruitModule {}
