import express from 'express'
import cors from 'cors';
import { sample_foods } from './data';

const app = express();
app.use(cors());
// might have to change this line to:
// app.use(cors({
//     credentials: true,
//     origin:["http://localhost:4200"]
// }));

app.get('/api/foods', (req, res) => {
    res.send(sample_foods)
})

const port = 5000;
app.listen(port, () => {
    console.log('Website served on http://localhost:' + port)
})





