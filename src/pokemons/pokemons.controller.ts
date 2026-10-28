import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PokemonsService } from './pokemons.service.js';
import { CreatePokemonDto } from './dto/create-pokemon.dto.js';
import { UpdatePokemonDto } from './dto/update-pokemon.dto.js';
import { PaginationDto } from '../shared/dtos/pagination.dto.js';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) { }

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonsService.create(createPokemonDto);
  }

  @Get()
  findAll(@Query() PaginationDto: PaginationDto) {
    return this.pokemonsService.findAll(PaginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonsService.update(+id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonsService.remove(+id);
  }
}
