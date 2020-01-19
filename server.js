const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, result) => {
    if(err) {
        console.log("Error");
        throw err;
    }
    console.log("DataBase Connected !!");
});

app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(process.env.PORT, () => {
    console.log(`server started at ${process.env.PORT}`);
});