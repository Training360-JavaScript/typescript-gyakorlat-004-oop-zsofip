import { ITransformer } from './hero-interface';

/**
 * Állítsd be helyesen a TransformerHero osztályt!
 * Ez az ITransformer interfészt implementálja.
 * Neve: TransformerHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class TransformerHero implements ITransformer {
    id: number = 678910;
    name: string = 'Dina Mite';
    wings: number = 4; 
    wheels: number = 6;
    clan: string = 'Spaghetti Monster';
    
    constructor(id: number, name: string, wings: number, wheels: number, clan: string) {
        this.id = id;
        this.name = name;
        this.wings = wings;
        this.wheels = wheels;
        this.clan = clan;
     }
}
