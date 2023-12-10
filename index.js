const express = require('express')

const app = express();

// app.method(path, hendler);
// app.use("/", (req, res, next)=>{
//     res.send('Hello Wordl');
// });

app.get("/", (req, res) =>{
    res.send('Hello GET Method');
});

app.post("/", (req, res) =>{
    res.send('Hello POST Method');
})

app.listen(4000,() =>{
    console.log('server berhasil di running di port 4000');
})