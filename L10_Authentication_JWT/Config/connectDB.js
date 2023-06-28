require('dotenv').config()
const mongoose = require('mongoose');

const DB = process.env.DBURL;
mongoose.connect(DB)
.then(()=>{
    console.log('DB is connected Successfuly');
})
.catch((err)=>{
    console.log(err.message);
    process.exit(1);
});
