const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Node application working fine')
  res.send('NODE APPLICATION WORKING FINE ON DEV.');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

