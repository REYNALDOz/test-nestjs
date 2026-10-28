import { IsString, IsNotEmpty, IsIn } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['fuego', 'agua', 'planta', 'eléctrico'])
  type: string;
}
