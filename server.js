'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Dieser Weg, wird kein leichter sein, dieser Weg ist steinig und schwer, jedoch nicht unmöglich, neuer versuch, ich dreh gleich durch');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
