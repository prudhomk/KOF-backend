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
});
