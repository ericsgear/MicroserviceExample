import "reflect-metadata";
import express from 'express';
import { RouterMain } from './RouterMain';

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(new RouterMain().setupRouter());

app.use(express.static(__dirname + '/staticResources'));

app.listen(port, () => {
    console.log(`Microservice Example running. Port: ${port}`);
});