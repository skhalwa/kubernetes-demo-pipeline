const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('working fine on Staging')

  res.send('Backend applicatin working fine on staging with latest update');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

