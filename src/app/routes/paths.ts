import * as H from 'history';

import pathCreator from '../../utils/pathCreator';

// from typings
export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

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
