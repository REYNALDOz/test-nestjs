import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto.js';
import { Pokemon } from './entities/pokemon.entity.js';

@Injectable()
export class PokemonsService {
  private pokemons: Pokemon[] = [];
  private counter = 1;

  create(createPokemonDto: CreatePokemonDto): Pokemon {
    const exists = this.pokemons.find(
      (p) => p.name === createPokemonDto.name,
    );
    if (exists) {
      throw new ConflictException(
        `Ya existe un pokémon con el nombre "${createPokemonDto.name}"`,
      );
    }

    const pokemon: Pokemon = {
      id: this.counter++,
      name: createPokemonDto.name,
      type: createPokemonDto.type,
      hp: 100,
      sprite: [],
    };
    this.pokemons.push(pokemon);
    return pokemon;
  }

  findAll(pagination?: { page?: number; limit?: number }): Pokemon[] {
    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 5;
    const start = (page - 1) * limit;
    return this.pokemons.slice(start, start + limit);
  }

  findOne(id: number): Pokemon {
    const pokemon = this.pokemons.find((p) => p.id === id);
    if (!pokemon) {
      throw new NotFoundException(`Pokémon #${id} no encontrado`);
    }
    return pokemon;
  }
}
