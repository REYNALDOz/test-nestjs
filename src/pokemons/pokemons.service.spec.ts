import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsService } from './pokemons.service.js';
import { CreatePokemonDto } from './dto/create-pokemon.dto.js';
import { NotFoundException, ConflictException } from '@nestjs/common';

describe('PokemonsService', () => {
  let service: PokemonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonsService],
    }).compile();

    service = module.get<PokemonsService>(PokemonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a pokemon with an auto-generated id', () => {
      const dto: CreatePokemonDto = { name: 'Pikachu', type: 'eléctrico' };
      const pokemon = service.create(dto);

      expect(pokemon.id).toBe(1);
      expect(pokemon.name).toBe('Pikachu');
      expect(pokemon.type).toBe('eléctrico');
      expect(pokemon.hp).toBe(100);
    });

    it('should increment the id for each new pokemon', () => {
      service.create({ name: 'Bulbasaur', type: 'planta' });
      const second = service.create({ name: 'Squirtle', type: 'agua' });

      expect(second.id).toBe(2);
    });

    it('should throw ConflictException when pokemon name already exists', () => {
      service.create({ name: 'Pikachu', type: 'eléctrico' });
      expect(() =>
        service.create({ name: 'Pikachu', type: 'agua' }),
      ).toThrow(ConflictException);
    });
  });

  describe('findAll', () => {
    it('should return paginated results default page 1 limit 5', () => {
      for (let i = 0; i < 7; i++) service.create({ name: `P${i}`, type: 'fuego' });
      expect(service.findAll({ page: 1, limit: 3 })).toHaveLength(3);
    });
  });

  describe('findOne', () => {
    it('should return the pokemon by id', () => {
      service.create({ name: 'Pikachu', type: 'eléctrico' });
      const pokemon = service.findOne(1);

      expect(pokemon.name).toBe('Pikachu');
    });

    it('should throw NotFoundException when pokemon does not exist', () => {
      expect(() => service.findOne(99)).toThrow(NotFoundException);
    });
  });
});
