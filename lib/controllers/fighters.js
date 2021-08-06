import { Router } from 'express';
import Fighter from '../models/Fighter.js';


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
  })

  .get('/api/v1/fighters/:id', async (req, res) => {
    try {
      const fighter = await Fighter.findById(req.params.id);
      res.send(fighter);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .put('/api/v1/fighters/:id', async (req, res) => {
    try {
      const fighter = await Fighter.update(req.body, req.params.id);
      res.send(fighter);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .delete('/api/v1/fighters/:id', async (req, res) => {
    try {
      const fighter = await Fighter.delete(req.params.id);
      res.send(fighter);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
