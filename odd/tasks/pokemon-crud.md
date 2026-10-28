# Feature: Completar CRUD de Pokémons

## Header
Completar el módulo `pokemons` del API NestJS para que tenga CRUD real con reglas de negocio, paginación, validación de entrada y pruebas unitarias + e2e. Ejemplo didáctico para aprender ODD con varios archivos.

## Specs

S1. Como usuario, quiero crear un Pokémon para guardarlo en mi colección.
   - Criterio: POST con nombre y tipo válidos devuelve 201 y el Pokémon creado con ID autogenerado.
   - Criterio: POST con nombre duplicado devuelve 409 y no crea nada.
   - Criterio: POST sin nombre o con tipo inválido devuelve 400 y no guarda nada.

S2. Como usuario, quiero listar mis Pokémons paginados para no recibir todos de golpe.
   - Criterio: GET acepta `page` y `limit` y devuelve solo la página solicitada.
   - Criterio: si no se envían parámetros, devuelve la primera página con un límite por defecto.

S3. Como usuario, quiero actualizar un Pokémon por su ID para corregir sus datos.
   - Criterio: PATCH con ID existente actualiza los campos enviados y devuelve el Pokémon modificado.
   - Criterio: PATCH con ID inexistente devuelve 404 y no modifica nada.

S4. Como usuario, quiero eliminar un Pokémon por su ID para sacarlo de mi colección.
   - Criterio: DELETE con ID existente lo elimina y devuelve 200/204.
   - Criterio: DELETE con ID inexistente devuelve 404 y no elimina nada.

S5. Como desarrollador, quiero que el controller HTTP valide el cuerpo de la petición con ValidationPipe para evitar datos inválidos en el service.
   - Criterio: el DTO `CreatePokemonDto` se usa en `@Body()` con `ValidationPipe` global ya configurado en `main.ts`.
   - Criterio: existe un test e2e que hace `POST /pokemons` y verifica 201, 400 y 409.

## Tasks

T1. Service: crear Pokémon sin duplicados (S1) — ruta: `src/pokemons/pokemons.service.ts`, `src/pokemons/pokemons.service.spec.ts` — commit: feat(pokemons): crear pokemon sin duplicados — **DONE** (ya implementado y testeado).

T2. Service: listar Pokémons con paginación (S2) — ruta: `src/pokemons/pokemons.service.ts`, `src/pokemons/pokemons.service.spec.ts` — commit: feat(pokemons): listar con paginación.

T3. Service: actualizar Pokémon por ID con 404 (S3) — ruta: `src/pokemons/pokemons.service.ts`, `src/pokemons/pokemons.service.spec.ts` — commit: feat(pokemons): actualizar pokemon con 404.

T4. Service: eliminar Pokémon por ID con 404 (S4) — ruta: `src/pokemons/pokemons.service.ts`, `src/pokemons/pokemons.service.spec.ts` — commit: feat(pokemons): eliminar pokemon con 404.

T5. Controller: conectar DTOs y ValidationPipe en endpoints (S5) — ruta: `src/pokemons/pokemons.controller.ts` — commit: feat(pokemons): validar body en controller.

T6. Test e2e: flujo POST /pokemons (201, 400, 409) (S5) — ruta: `test/app.e2e-spec.ts` — commit: feat(pokemons): test e2e crear pokemon.

T7. Verificar suite completa y documentar resultado — ruta: todos los archivos de prueba — commit: test(pokemons): suite verde.

## Log

L1. Usuario pidió un ejemplo de cambio más grande para crear el documento ODD/TASKS y entender el flujo con varios archivos.

L2. Se acordó el feature "Completar CRUD de Pokémons" con 7 specs y 7 tareas. T1 ya está hecho (crear sin duplicados, 9 tests pasando).
