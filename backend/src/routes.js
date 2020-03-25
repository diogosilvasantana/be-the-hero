const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.getOngs);
routes.post('/ongs', OngController.createOng); 

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.getIncidents);
routes.post('/incidents', IncidentsController.createIncident);
routes.delete('/incidents/:id', IncidentsController.deleteIncident);

module.exports = routes