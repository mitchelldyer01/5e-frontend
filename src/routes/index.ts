import express, {Router} from 'express';
import {NewAuthMiddleware} from '../middlewares/auth';

class Index {
  router: Router;

  constructor() {
    this.router = express.Router();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.router.use(NewAuthMiddleware().check);
  }

  routes() {
    this.router.get(/^\/$/, (req, res) => {
      res.send('Index');
    });
    this.router.get('/login', (req, res) => {
      res.render('login', {
        subject: 'Login test',
      });
    });
    this.router.get('/register', (req, res) => {
      res.send('Register');
    });
  }
}

export function NewIndexRoute(): Index {
  return new Index();
}
