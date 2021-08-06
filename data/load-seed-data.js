import client from '../lib/client.js';
import fighters from './data.js';

run();

async function run() {
  try {
    await Promise.all(
      fighters.map(fighter => {
        return client.query(`
        INSERT INTO fighters (name, japanese, origin, birthplace, style, job, powers, image, quote)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
        `,
        [fighter.name, fighter.japanese, fighter.origin, fighter.birthplace, fighter.style, fighter.job, fighter.powers, fighter.image, fighter.quote]);
      })
    );

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
}

