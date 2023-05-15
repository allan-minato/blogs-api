const express = require('express');
const loginRoute = require('./routes/loginRouter');
const userRoute = require('./routes/userRouter');
const categoriesRoute = require('./routes/categoriesRouter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(loginRoute);
app.use(userRoute);
app.use(categoriesRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
