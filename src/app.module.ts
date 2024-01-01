import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FruitModule } from './api/fruit/fruit.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.URI_DB),
    FruitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
