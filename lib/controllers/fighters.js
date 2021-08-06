import { Router } from 'express';
import Fighter from '../models/Fighter.js';
import fighters from '../../data/data.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const fighters = 
      res.send(fighters);
    } catch (err) {
      next(err);
    }
  });
