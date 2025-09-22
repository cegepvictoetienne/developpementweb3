import JetonService from '@src/services/JetonService';
import User from '@src/models/User';
import { IReq, IRes } from './common/types';
import { parseReq } from './common/util';
// **** Functions **** //

/******************************************************************************
                                Constants
******************************************************************************/

const Validators = {
  generatetoken: parseReq({ userLogin: User.testlogin }),
} as const;

/**
 * Générer un jeton.
 *
 * @param {IReq} req - La requête au serveur
 * @param {IRes} res - La réponse du serveur
 */
async function generateToken(req: IReq, res: IRes) {
  const { userLogin } = Validators.generatetoken(req.body);
  const token = await JetonService.generateToken(userLogin);
  return res.send({ token: token });
}

// **** Export default **** //

export default {
  generateToken,
} as const;
