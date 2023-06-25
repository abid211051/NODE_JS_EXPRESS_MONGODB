require('dotenv').config();
const app = require('./app')
const PORT = process.env.PORT || 3005;


app.use((req, res)=>{
    res.send('404 Not found');
})
app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})