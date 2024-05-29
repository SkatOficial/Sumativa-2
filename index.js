const express = require('express');
const app = express();

app.use(express.json());

const autos = [
    {
      marca: 'Ferrari',
      modelo: '488 GTB',
      año: 2020,
      transmision: 'Automática',
      motor: '3.9L V8',
      frenos: 'Discos de carbono cerámico',
      velocidades: 7
    },
    {
      marca: 'Lamborghini',
      modelo: 'Huracán EVO',
      año: 2019,
      transmision: 'Automática',
      motor: '5.2L V10',
      frenos: 'Discos de carbono cerámico',
      velocidades: 7
    },
    {
      marca: 'Porsche',
      modelo: '911 Turbo S',
      año: 2021,
      transmision: 'Automática',
      motor: '3.8L H6',
      frenos: 'Discos de carbono cerámico',
      velocidades: 8
    },
    {
      marca: 'McLaren',
      modelo: '720S',
      año: 2022,
      transmision: 'Automática',
      motor: '4.0L V8',
      frenos: 'Discos de carbono cerámico',
      velocidades: 7
    },
    {
      marca: 'Aston Martin',
      modelo: 'Vantage',
      año: 2021,
      transmision: 'Manual',
      motor: '4.0L V8',
      frenos: 'Discos de acero',
      velocidades: 7
    },
    {
      marca: 'Chevrolet',
      modelo: 'Corvette C8',
      año: 2020,
      transmision: 'Automática',
      motor: '6.2L V8',
      frenos: 'Discos de acero',
      velocidades: 8
    },
    {
      marca: 'Ford',
      modelo: 'GT',
      año: 2019,
      transmision: 'Automática',
      motor: '3.5L V6',
      frenos: 'Discos de carbono cerámico',
      velocidades: 7
    },
    {
      marca: 'Nissan',
      modelo: 'GT-R',
      año: 2020,
      transmision: 'Automática',
      motor: '3.8L V6',
      frenos: 'Discos de carbono cerámico',
      velocidades: 6
    },
    {
      marca: 'Audi',
      modelo: 'R8',
      año: 2021,
      transmision: 'Automática',
      motor: '5.2L V10',
      frenos: 'Discos de acero',
      velocidades: 7
    },
    {
      marca: 'Mercedes-Benz',
      modelo: 'AMG GT',
      año: 2020,
      transmision: 'Automática',
      motor: '4.0L V8',
      frenos: 'Discos de carbono cerámico',
      velocidades: 7
    }
];

app.get('/', (req , res) =>{
    res.send('Ta funcionando');
});

app.get('/api/autos', (req , res) =>{
    res.send(autos);
});

app.get('/api/autos/:modelo', (req , res) =>{
    const auto = autos.find(x => x.modelo === req.params.modelo);
    if (!auto) return res.status(404).send('No se ha encontrado');
    else res.send(auto);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Puerto ${port}`));
