const app = require('express')();

app.get('/', (req, res) => {
  res.status(200).send('Hello World !');
})

app.listen(80, () => {
  console.log(`Listening on port 80`);
});
