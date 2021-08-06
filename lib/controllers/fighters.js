import { Router } from 'express';
import Fighter from '../models/Fighter';


export default Router()
  .post('/api/v1/fighters', async (req, res) => {
    try {
      const fighter = await Fighter.insert(req.body);
      res.send(fighter);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/fighters', async (req, res) => {
    try { 
      const fighter = await Fighter.findAll();
      res.send(fighter);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });