const express = require('express');
const ideasRouter = require('./routes/ideas');
const port = 5000;
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//welcomepage
app.get('/', (req, res) => {
  //   res.send({ message: "Hello World!" });
  res.json({ message: 'Welcome to RandomIdeas API' });
});
app.use('/api/ideas', ideasRouter);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
