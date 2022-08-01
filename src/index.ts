import express, {Express} from 'express';
import {NewIndexRoute} from './routes/index';
import config from './config';

const app: Express = express();
const port: string = config.PORT;

console.log('Binding Routes');
app.use('/', NewIndexRoute().router);

app.listen(port, () => {
  console.log(`[server]: Server is running on port ${port}`);
});
