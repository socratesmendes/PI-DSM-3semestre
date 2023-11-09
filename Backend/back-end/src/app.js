const express = require('express');

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

// Restante do seu código usando o Express...

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');
const produtoRouter = require('./routes/produto.js');


const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/produto", produtoRouter);

export default app;
