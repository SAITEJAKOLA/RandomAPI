const path = require('path')
const express = require('express');
const cors = require('cors');
const ideasRouter = require('./routes/ideas');
require('dotenv').config();
const connectDb = require('./config/db');
const port = process.env.PORT;
connectDb();
const app = express();

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors middleware
app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    credentials: true,
  })
);

//welcomepage
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RandomIdeas API' });
});

//Router to backend API's
app.use('/api/ideas', ideasRouter);

//Server listens on
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
