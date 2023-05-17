import fs from 'fs/promises';
import express from 'express';
import cors from 'cors';
import _ from 'lodash';
import { v4 as uuid} from 'uuid';

const app = express();

app.get('/', (req, res) => {
    res.json({})
})

app.listen(3000, () => console.log('API Server is running....'));

