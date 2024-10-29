import admin from 'firebase-admin';
import express, { Express, Request, Response, NextFunction } from 'express';

var serviceAccount = require('../firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const firebaseAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  console.log('start firebaseAuthentication!');
  if (authHeader) {
    console.log('authHeader:', authHeader);
    const idToken = authHeader.split(' ')[1];
    console.log('idToken:', idToken);
    admin
      .auth()
      .verifyIdToken(idToken)
      .then(function (decodedToken) {
        console.log('Next()');
        next();
      })
      .catch(function (error) {
        console.log('catch Error:', error);
        const errorMessage = {
          status: 403,
          error: error,
        };
        res.sendStatus(403).send(errorMessage);
        res.end();
      });
  } else {
    console.log('no header');
    const errorMessage = {
      status: 401,
      error: 'Missing authorization header',
    };
    res.sendStatus(401);
    res.end();
  }
};
