const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.status(200).json({
        hello: "world"
    });
});

app.listen(PORT, () => { console.log(`running on port ${PORT}`) })
