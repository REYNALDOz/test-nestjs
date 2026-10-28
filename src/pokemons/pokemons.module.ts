import { Module } from '@nestjs/common';
import { PokemonsService } from './pokemons.service.js';
import { PokemonsController } from './pokemons.controller.js';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class PokemonsModule {}
