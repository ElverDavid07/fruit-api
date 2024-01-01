import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseMessage } from 'src/utlis/ResponseMessage';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { Fruit } from './entities/fruit.entity';

@Injectable()
export class FruitService {
  constructor(@InjectModel(Fruit.name) private fruitModel: Model<Fruit>) {}

  async findAll() {
    return await this.fruitModel.find().sort({ createdAt: -1 });
  }

  async findOne(id: string) {
    const fruitFound = await this.fruitModel.findById(id);
    if (!fruitFound) {
      throw new HttpException('Esta fruta no existe!', HttpStatus.NOT_FOUND);
    }
    return fruitFound;
  }

  async create(createFruitDto: CreateFruitDto) {
    const fruit = await this.fruitModel.create(createFruitDto);
    fruit.save();
    return ResponseMessage(`Fruta ${createFruitDto.name} creada correctamente`);
  }

  async update(id: string, updateFruitDto: UpdateFruitDto) {
    const fruitFound = await this.fruitModel.findById(id);
    if (!fruitFound) {
      throw new HttpException('Esta fruta no existe!', HttpStatus.NOT_FOUND);
    }
    await this.fruitModel.findByIdAndUpdate(id, updateFruitDto);
    return ResponseMessage(
      `Fruta ${updateFruitDto.name} actualizada correctamente`,
    );
  }

  async remove(id: string) {
    const fruitFound = await this.fruitModel.findById(id);
    if (!fruitFound) {
      throw new HttpException('Esta fruta no existe!', HttpStatus.NOT_FOUND);
    }
    await this.fruitModel.findByIdAndDelete(id);
    return ResponseMessage(`Fruta ${fruitFound.name} eliminada correctamente`);
  }
}
