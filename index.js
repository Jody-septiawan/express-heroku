const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'hbs');

app.get('/hello', (req, res) => {
  res.render('index');
});

app.get('/', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'jody1',
      email: 'jody1@mail.com',
      password: '123',
    },
    {
      id: 2,
      name: 'jody2',
      email: 'jody2@mail.com',
      password: '123',
    },
    {
      id: 3,
      name: 'jody3',
      email: 'jody3@mail.com',
      password: '123',
    },
  ];
  res.render('user', { users });
});

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
