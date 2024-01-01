import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { FruitService } from './fruit.service';

@Controller('fruit')
export class FruitController {
  constructor(private readonly fruitService: FruitService) {}

  @Post()
  create(@Body() createFruitDto: CreateFruitDto) {
    return this.fruitService.create(createFruitDto);
  }

  @Get()
  findAll() {
    return this.fruitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fruitService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFruitDto: UpdateFruitDto) {
    return this.fruitService.update(id, updateFruitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fruitService.remove(id);
  }
}
