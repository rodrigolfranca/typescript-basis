import express from 'express';
import router from './routers/router';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/hello', router);

export default app;