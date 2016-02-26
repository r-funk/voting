// Module dependencies
import mongoose from 'mongoose';
import path from 'path';
import cons from 'consolidate';
import cors from 'cors';

// Express related packages
import Express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import config from './config';

// Connect to mongoDB
mongoose.connect(config.mongoURL, (error, connection) => {
  if (error) {
    console.error('mongod not running');
    throw error;
  }
});

// Setup express
const app = new Express();

app.engine('html', cons.nunjucks);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'views'));

app.use(cors());
app.use(bodyParser.json());
app.use('/static', Express.static(path.resolve(__dirname, '../static')));
app.use('/', routes);

app.listen(config.port, (error) => {
  if (!error) {
    console.info(`R&funk's awesome Voting is running on port ${config.port}`);
  }
});
