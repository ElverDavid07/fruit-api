import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateFruitDto } from './create-fruit.dto';

export class UpdateFruitDto extends PartialType(CreateFruitDto) {
  @IsString({ message: 'El nombre debe ser un texto!' })
  name?: string;
  @IsString({ message: 'La familia debe ser un texto!' })
  family?: string;
  @IsString({ message: 'La variedad debe ser un texto!' })
  variety?: string;
  @IsString({ message: 'El nombre cientifico debe ser un texto!' })
  scientificName?: string;
  @IsString({ message: 'La descripcion debe ser un texto!' })
  description?: string;
}
