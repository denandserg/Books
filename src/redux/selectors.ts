import subSelectorCreator from '../utils/subSelectorCreator';
import { ApiState } from './reducer';

const createApiSelector = subSelectorCreator<ApiState>(state => state.api);

const ApiSelectors = {
  isSignedIn: createApiSelector<boolean>(({ signedIn }) => signedIn)
};

export default ApiSelectors;
