import moment from 'moment';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM =
  'nameOrObj arg must a string or an object ' +
  'with the appropriate user keys.';

// **** Types **** //

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  created: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  name?: string,
  email?: string,
  password?: string,
  created?: Date,
  id?: number // id last cause usually set by db
): IUser {
  return {
    id: id ?? -1,
    name: name ?? '',
    email: email ?? '',
    password: password ?? '',
    created: created ? new Date(created) : new Date(),
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IUser {
  if (isUser(param)) {
    return new_(
      param.name,
      param.email,
      param.password,
      param.created,
      param.id
    );
  }
  throw new Error(INVALID_CONSTRUCTOR_PARAM);
}

/**
 * See if the param meets criteria to be a user.
 */
function isUser(arg: unknown): arg is IUser {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg &&
    typeof arg.id === 'number' &&
    'email' in arg &&
    typeof arg.email === 'string' &&
    'password' in arg &&
    typeof arg.password === 'string' &&
    'name' in arg &&
    typeof arg.name === 'string' &&
    'created' in arg &&
    moment(arg.created as string | Date).isValid()
  );
}

/**
 * See if the param meets criteria to be a user.
 */
function isUserLogin(arg: unknown): arg is IUserLogin {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'email' in arg &&
    typeof arg.email === 'string' &&
    'password' in arg &&
    typeof arg.password === 'string'
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isUser,
  isUserLogin,
} as const;
