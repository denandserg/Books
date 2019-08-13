import { createSelector, Selector } from 'reselect';

import { RootState } from '../redux/createRootReducer';

export default function subSelectorCreator<SubState, R = RootState>(
  storeSelector: (state: RootState) => SubState
) {
  return function createSubSelector<R>(subSelector: Selector<SubState, R>) {
    return createSelector(
      storeSelector,
      subSelector
    );
  };
}
