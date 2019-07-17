const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
const cookieParser = require("cookie-parser");
const PORT = 5000;

const invoiceRouter = require('./server/routes/invoice.routes');
const freightRouter = require('./server/routes/freight.routes');

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const options = {
    useNewUrlParser: true
}

mongoose.connect('mongodb://127.0.0.1:27017/reckon', options);
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.use('/invoices', invoiceRouter);
app.use('/freight', freightRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});