const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 
const routes = require('./routes/routes');

app.use(cors()); 
app.use(express.json());
app.use(routes);




async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Containment-zone-alert', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected successfully to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();

app.listen(9000, function (error) {
    if (error) {
        console.error('Error starting the server:', error);
    } else {
        console.log('Server is running on port 9000');
    }
});
