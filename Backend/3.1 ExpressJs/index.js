import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
   res.send('<h1>Hi, I am here</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>This is about section</h1>');
});

app.listen(port, () => {
    console.log(`Express is running on port ${port}`);
});
