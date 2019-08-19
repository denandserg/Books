import pathCreator from '../../utils/pathCreator';

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

const RoutePaths = {
  _: pathCreator('/'),
  SignIn: {
    _: pathCreator('/sign-in')
  },
  Registration: {
    _: pathCreator('/register')
  },
  Favourite: {
    _: pathCreator('/favourite')
  },
  Book: {
    _: pathCreator('/book/:id')
  }
};

export default RoutePaths;
