import pathCreator from '../../utils/pathCreator';

const RoutePaths = {
  _: pathCreator('/'),
  SignIn: {
    _: pathCreator('/sign-in')
  },
  Registration: {
    _: pathCreator('/register')
  }
};

export default RoutePaths;
