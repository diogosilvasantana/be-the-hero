const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

  // LISTAR
  async getOngs(request, response) {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs)
  },

  // CRIAR
  async createOng(request, response) {
    const {
      name,
      email,
      whatsapp,
      city,
      uf
    } = request.body;

    const id = crypto.randomBytes(4).toString('HEX').toUpperCase()

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({
      id
    })
  }
}