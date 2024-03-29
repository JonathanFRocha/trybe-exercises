require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.use(express.static(`${__dirname}/uploads`));

const upload = multer({ dest: 'uploads' });

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file }));

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
