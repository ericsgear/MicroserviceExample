import "reflect-metadata";
import express from 'express';
import { Router2 } from './Router2';

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(new Router2().setupRouter());

app.use(express.static(__dirname + '/staticResources'));

app.listen(port, () => {
    console.log(`Microservice Example api 2 running. Port: ${port}`);
});