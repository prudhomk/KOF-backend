import pool from '../utils/pool.js';

export default class Fighter {
  id;
  name;
  japanese;
  origin;
  birthplace;
  style;
  job;
  powers;
  image;
  quote;

  constructor(row) {
    this.id = row.id;
    this.name = row.name
    this.japanese = row.japanese;
    this.origin = row.origin;
    this.birthplace = row.birthplace;
    this.style = row.style;
    this.job = row.job;
    this.powers = row.powers;
    this.image = row.image;
    this.quote = row.quote;
  }

  static async insert({ name, japanese, origin, birthplace, style, job, powers, image, quote }) {
    const { rows } = await pool.query(
      `INSERT INTO fighters (name, japanese, origin, birthplace, style, job, powers, image, quote)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
       [name, japanese, origin, birthplace, style, job, powers, image, quote]
    );

    return new Fighter(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query('SELECT * FROM fighters');

    return rows.map(row => new Fighter(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM fighters WHERE id = $1',
      [id]
    );
    return new Fighter(rows[0]);
  }
}
