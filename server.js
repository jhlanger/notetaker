
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

const apiRoutes = require('./routes/apiRoutes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
// =============================================================
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });