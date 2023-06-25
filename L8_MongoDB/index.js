const express = require('express');
const mongoose = require('mongoose');
const useRoute = require('./route/route');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3005;

const URL = `mongodb+srv://learn-mongoose:BUBxFqgdWXVugl8D@cluster0.r4h2jko.mongodb.net/mongooseLearn?retryWrites=true&w=majority`;
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`DB connected succesfully`);
    })
    .catch((error) => {
        console.log(`Connection Failed ${error}`);
    })

app.use(useRoute);
app.listen(PORT, () => {
    console.log(`server is running`);
})