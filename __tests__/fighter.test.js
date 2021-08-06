import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Fighter from '../lib/models/Fighter.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a fighter via POST', async () => {
    const res = await request(app)
      .post('/api/v1/fighters')
      .send({
        name: 'Mr. Karate',
        japanese: 'Mr.カラテ',
        origin: 'Art of Fighting',
        birthplace: 'Japan',
        style: 'Kyokugenryu Karate',
        job: 'The True Master of Kyokugenryu Karate',
        powers: 'Ki',
        image: '/MrKarate.webp',
        quote: 'Come on! I\'m gonna cure you of the disease called life.'
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'Mr. Karate',
      japanese: 'Mr.カラテ',
      origin: 'Art of Fighting',
      birthplace: 'Japan',
      style: 'Kyokugenryu Karate',
      job: 'The True Master of Kyokugenryu Karate',
      powers: 'Ki',
      image: '/MrKarate.webp',
      quote: 'Come on! I\'m gonna cure you of the disease called life.'
    });
  });

  it('finds all fighters via GET', async () => {

    const karate = await Fighter.insert({
      name: 'Mr. Karate',
      japanese: 'Mr.カラテ',
      origin: 'Art of Fighting',
      birthplace: 'Japan',
      style: 'Kyokugenryu Karate',
      job: 'The True Master of Kyokugenryu Karate',
      powers: 'Ki',
      image: '/MrKarate.webp',
      quote: 'Come on! I\'m gonna cure you of the disease called life.'
    });

    const goro = await Fighter.insert({
      name: 'Goro Daimon',
      japanese: '大門五郎',
      origin: 'KOF ‘94',
      birthplace: 'Japan',
      style: 'Judo',
      powers: 'Geokinesis',
      job: 'Judo Master',
      image: '/gorodaimon.webp',
      quote: 'Weakness is strength! Let not my appearance fool you!'
    });

    const angel = await Fighter.insert({
      name: 'Angel',
      japanese: 'アンヘル',
      origin: 'KOF 2001',
      birthplace: 'Mexico',
      style: 'Perfunctory, Pro wrestling',
      powers: 'Enhanced Superhuman',
      job: 'Agent of NESTS',
      image: '/Angel.webp',
      quote: 'Be me good or be me bad, it is I who always prevails.'
    });

    const res = await request(app).get('/api/v1/fighters');
    expect(res.body).toEqual([karate, goro, angel]);
  });

  it('finds a fighter by id via GET', async () => {
    const fighter = await Fighter.insert({
      name: 'Angel',
      japanese: 'アンヘル',
      origin: 'KOF 2001',
      birthplace: 'Mexico',
      style: 'Perfunctory, Pro wrestling',
      powers: 'Enhanced Superhuman',
      job: 'Agent of NESTS',
      image: '/Angel.webp',
      quote: 'Be me good or be me bad, it is I who always prevails.'
    });

    const res = await request(app).get(`/api/v1/fighters/${fighter.id}`);
    expect(res.body).toEqual(fighter);
  });
});
