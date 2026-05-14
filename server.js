const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

const timeSchema = new mongoose.Schema({
    hours: Number,
    minutes: Number,
    seconds: Number,
    date: { type: Date, default: Date.now }
});

const Time = mongoose.model('Time', timeSchema);

app.post('/save-time', async (req, res) => {
    const { hours, minutes, seconds } = req.body;
    const newTime = new Time({ hours, minutes, seconds });
    await newTime.save();
    res.send('Tiempo guardado');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});