import { Request, Response, NextFunction } from 'express';

const auth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    if (req.headers.authorization.split(' ')[1] === process.env.MY_API_KEY) {
      next();
    }
  }
  res.status(401).send({ message: 'Unauthorized access' });
};

export default auth;
