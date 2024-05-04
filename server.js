const express = require('express');
const ideasRouter = require('./routes/ideas');
require('dotenv').config();
const connectDb = require('./config/db');
const port = process.env.PORT;
connectDb();
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//welcomepage
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RandomIdeas API' });
});
app.use('/api/ideas', ideasRouter);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
