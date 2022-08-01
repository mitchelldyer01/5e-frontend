import {Request, Response, NextFunction} from 'express';
import {AuthService} from '../services/auth';
import config from '../config';

class AuthMiddleware {
  check(req: Request, res: Response, next: NextFunction) {
    const a = new AuthService();

    switch (req.path) {
      case '/login':
      case '/register':
        next();
        return;
    }

    if (a.loggedIn(config.AUTH_URL)) {
      next();
      return;
    }

    res.redirect('/login');
  }
}

export function NewAuthMiddleware(): AuthMiddleware {
  return new AuthMiddleware();
}
