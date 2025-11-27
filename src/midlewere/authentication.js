import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

const secret_key = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => { 
  const token = req.headers['authorization']?.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, secret_key, (err, user) => {
        if (err) return res.sendStatus(403);    
        req.user = user;
        next();
    });
};
