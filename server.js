
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./Develop/routes/apiRoutes/apiRoutes.js');
const htmlRoutes = require('./Develop/routes/htmlRoutes/htmlRoutes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
// =============================================================
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });