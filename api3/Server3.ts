import "reflect-metadata";
import express from 'express';
import { Router3 } from './Router3';

const app = express();
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(new Router3().setupRouter());

app.use(express.static(__dirname + '/staticResources'));

app.listen(port, () => {
    console.log(`Microservice Example api 3 running. Port: ${port}`);
});