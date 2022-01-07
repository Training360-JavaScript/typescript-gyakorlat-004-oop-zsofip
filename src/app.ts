// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero';
import { TransformerHero } from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {
        id: 12,
        name: 'Olivia',
        sex: 'female',
        age: 34,
        health: 7
    },
    {
        id: 34,
        name: 'Oliver',
        sex: 'male',
        age: 43,
        health: 8
    },
    {
        id: 56,
        name: 'Oleander',
        sex: 'both',
        age: 26,
        health: 9
    }
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {
        id: 78,
        name: 'Little Monster',
        wings: 1,
        wheels: 2,
        clan: 'Spaghetti Monster'
    },
    {
        id: 910,
        name: 'Big Monster',
        wings: 6,
        wheels: 12,
        clan: 'Spaghetti Monster'
    },
    {
        id: 1112,
        name: 'Dreadful Hunter',
        wings: 8,
        wheels: 32,
        clan: 'Monster Hunter'
    }
];
