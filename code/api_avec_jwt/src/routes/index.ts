import { Router } from 'express';

import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';
import JetonRoutes from './JetonRoutes';

// **** Variables **** //

const apiRouter = Router();

// ** Add UserRouter ** //

// Init router
const userRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);

// ** Add JetonRouter ** //

// Init Router
const tokenRouter = Router();

// Generate token
tokenRouter.post(Paths.GenerateToken.Get, JetonRoutes.generateToken);

// Add JetonRouter
apiRouter.use(Paths.GenerateToken.Base, tokenRouter);

// **** Export default **** //

export default apiRouter;
