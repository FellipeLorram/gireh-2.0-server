import express from 'express';
import mongoose from 'mongoose';

require('dotenv').config();

const app = express();

declare const process: {
  env: {
    CONNECTIONSTRING: string
    PORT: number
  }
};

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('Conectado');
  })
  .catch((e) => console.log(e));

const ServicoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereço: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },

  esfOd: { type: String, required: false, default: '' },
  cilOd: { type: String, required: false, default: '' },
  eixoOd: { type: String, required: false, default: '' },

  esfOe: { type: String, required: false, default: '' },
  cilOe: { type: String, required: false, default: '' },
  eixoOe: { type: String, required: false, default: '' },

  adicao: { type: String, required: false, default: '' },

  dnpOd: { type: String, required: false, default: '' },
  alturaOd: { type: String, required: false, default: '' },

  dnpOe: { type: String, required: false, default: '' },
  alturaOe: { type: String, required: false, default: '' },

  armacao: { type: String, required: false, default: '' },
  valorArm: { type: String, required: false, default: '' },

  lente: { type: String, required: false, default: '' },
  valorLen: { type: String, required: false, default: '' },

  lenteContato: { type: String, required: false, default: '' },
  valorLenContato: { type: String, required: false, default: '' },

  total: { type: String, required: false, default: '' },

  formaPagamento: { type: String, required: false, default: '' },
  valorDin: { type: String, required: false, default: '' },
  valorCar: { type: String, required: false, default: '' },

  pago: { type: String, required: false, default: '' },
  entregue: { type: String, required: false, default: '' },

  resta: { type: String, required: false, default: '' },
  CriadoEm: { type: Date, default: Date.now },
});

const ServicoModel = mongoose.model('Servico', ServicoSchema);

app.get('/', async (req, res) => {
  const response = await ServicoModel.find().sort({ CriadoEm: -1 });
  res.send({
    response,
  });
});

app.on('Conectado', () => {
  app.listen(process.env.PORT || 3000, async () => {
    console.log('http://localhost:3000');
  });
});
