const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

let bills = [];

app.get('/items', (req, res) => {
  res.json(bills);
});

app.post('/items', (req, res) => {
  const { patientName, patientAddress, hospitalName, dateOfService, billAmount } = req.body;

  if (!patientName || !patientAddress || !hospitalName || !dateOfService || !billAmount) {
    res.status(400).send('All fields are required');
    return;
  }

  const newBill = { patientName, patientAddress, hospitalName, dateOfService, billAmount };
  bills.push(newBill);
  res.status(201).json(newBill);
});

module.exports = app;

// app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// app.listen(PORT);
