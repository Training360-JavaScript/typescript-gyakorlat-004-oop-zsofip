import { expect } from 'chai';

import { describe, it } from 'mocha';

interface IIndexable {
    [key: string]: any;
}

describe('HumanHeroClassTest', () => {
    it('human class should implement the IHuman interface', async () => {
        const humanClass = (await import('../src/hero')).HumanHero;
        expect(typeof humanClass !== 'undefined').equal(true);

        const humanHero = new humanClass(5, 'Jack', 'male', 44, 97);
        expect(humanHero.age).equal(44);
        expect(humanHero.name).equal('Jack');
        expect(humanHero.health).equal(97);
        expect(humanHero.sex).equal('male');
        expect(humanHero.id).equal(5);
    });    
});

describe('TransformerHeroClassTest', () => {
    it('human class should implement the IHuman interface', async () => {
        const transformerClass = (await import('../src/transformer')).TransformerHero;
        expect(typeof transformerClass !== 'undefined').equal(true);

        const transformerHero = new transformerClass(5, 'Jack', 2, 12, 'bad');
        expect(transformerHero.wings).equal(2);
        expect(transformerHero.name).equal('Jack');
        expect(transformerHero.wheels).equal(12);
        expect(transformerHero.clan).equal('bad');
        expect(transformerHero.id).equal(5);
    });    
});

describe('HumanHeroTest', () => {
    it('humans should contain real humans', async () => {
        const humans = (await import('../src/app')).humans;
        expect(typeof humans[0] !== 'undefined').equal(true);
        expect(typeof humans[0].age === 'number').equal(true);
        expect(typeof humans[0].name === 'string').equal(true);
        expect(typeof humans[0].health === 'number').equal(true);
        expect(typeof humans[0].sex === 'string').equal(true);
        expect(typeof humans[0].id === 'number').equal(true);
    });    
});

describe('TransformerHeroTest', () => {
    it('transformers should contain real transformers', async () => {
        const transformers = (await import('../src/app')).transformers;
        expect(typeof transformers[1] !== 'undefined').equal(true);
        expect(typeof transformers[1].clan === 'string').equal(true);
        expect(typeof transformers[1].name === 'string').equal(true);
        expect(typeof transformers[1].wheels === 'number').equal(true);
        expect(typeof transformers[1].id === 'number').equal(true);
    });    
});
