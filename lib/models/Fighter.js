import pool from '../utils/pool.js';

export default class Fighter {
  id;
  name;
  japanese;
  originalAppearance;
  birthplace;
  fightingStyle;
  job;
  powers;
  image;
  quote;

  constructor(row) {
    this.id = row.id;
    this.url = row.url;
    this.title = row.title;
    this.image = row.image;
  }

  static async insert({ name, japanese, originalAppearance, birthplace, fightingStyle, job, powers, image, quote }) {
    const { rows } = await pool.query(
      `INSERT INTO fighters (name, japanese, originalAppearance, birthplace, fightingStyle, job, powers, image, quote)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
       [name, japanese, originalAppearance, birthplace, fightingStyle, job, powers, image, quote]
    );

    return new Fighter(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query('SELECT * FROM fighters');

    return rows.map(row => new Fighter(row));
  }
}
