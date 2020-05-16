const express = require("express");
    const app = express();

    app.listen(5000);

    const PORT = process.env.PORT || 5000;

    app.get('/', (req,res) =>{
        res.send({"hello":"there"});
    });