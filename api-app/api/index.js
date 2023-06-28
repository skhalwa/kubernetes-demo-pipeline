const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('working fine on Staging')
  res.send('API APPLICATION WORKING FINE ON DEV');
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

