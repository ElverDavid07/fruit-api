import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFruitDto {
  @IsNotEmpty({ message: 'El nombre es requerido!' })
  @IsString({ message: 'El nombre debe ser un texto!' })
  name: string;
  @IsNotEmpty({ message: 'la familia de la fruta es requerida!' })
  @IsString({ message: 'La familia debe ser un texto!' })
  family: string;
  @IsString({ message: 'La variedad debe ser un texto!' })
  variety?: string;
  @IsNotEmpty({ message: 'El nombre cientifico es requerido!' })
  @IsString({ message: 'El nombre cientifico debe ser un texto!' })
  scientificName: string;
  @IsNotEmpty({ message: 'La descripcion es requerida!' })
  @IsString({ message: 'La descripcion debe ser un texto!' })
  description: string;
}
