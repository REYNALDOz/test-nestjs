import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PokemonsModule } from './pokemons/pokemons.module.js';

@Module({
  imports: [PokemonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
