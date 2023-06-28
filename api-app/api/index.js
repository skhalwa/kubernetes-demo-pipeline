const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('working fine on Staging')
<<<<<<< HEAD
  res.send('Api application working fine, new updated');
=======
  res.send('Api application working fine, updated');
>>>>>>> 240dff53c2bda13baae31377d81b3e4071fdd02e
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

