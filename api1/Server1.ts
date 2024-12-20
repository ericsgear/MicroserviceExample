import "reflect-metadata";
import express from 'express';
import { Router1 } from './Router1';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(new Router1().setupRouter());

app.use(express.static(__dirname + '/staticResources'));

app.listen(port, () => {
    console.log(`Microservice Example api 1 running. Port: ${port}`);
});